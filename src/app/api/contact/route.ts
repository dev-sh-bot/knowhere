import { NextResponse } from "next/server";
import { SERVICE_OPTIONS } from "@/lib/data";

const MAX_BODY_BYTES = 12_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const BUDGET_OPTIONS = new Set([
  "Under $3k",
  "$3k – $10k",
  "$10k – $30k",
  "$30k+",
  "Not sure yet",
]);

class PayloadTooLargeError extends Error {}

async function postToAppsScript(url: URL, payload: Record<string, string>) {
  // Apps Script still reads JSON from postData.contents with text/plain.
  // Use redirect:"follow" — redirect:"manual" is rejected with 403 by script.google.com.
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    cache: "no-store",
    redirect: "follow",
    signal: AbortSignal.timeout(25_000),
  });
}

async function readBoundedBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) return "";

  const chunks: Uint8Array[] = [];
  let byteLength = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    byteLength += value.byteLength;
    if (byteLength > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new PayloadTooLargeError();
    }
    chunks.push(value);
  }

  const body = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(body);
}

function readField(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : null;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Expected a JSON submission." }, { status: 415 });
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Submission is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(await readBoundedBody(request)) as unknown;
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return NextResponse.json({ error: "Submission is too large." }, { status: 413 });
    }
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const name = readField(body.name, 120);
  const email = readField(body.email, 254);
  const company = readField(body.company, 160);
  const service = readField(body.service, 120);
  const budget = readField(body.budget, 40);
  const message = readField(body.message, 4_000);
  const website = readField(body.website, 200);

  if (
    name === null ||
    email === null ||
    company === null ||
    service === null ||
    budget === null ||
    message === null ||
    website === null ||
    name.length < 2 ||
    !EMAIL_PATTERN.test(email) ||
    message.length < 10 ||
    !SERVICE_OPTIONS.includes(service) ||
    !BUDGET_OPTIONS.has(budget)
  ) {
    return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  // Quietly discard automated submissions caught by the hidden honeypot.
  if (website) return NextResponse.json({ ok: true });

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable. Please email info@knowheresystems.com." },
      { status: 503 },
    );
  }

  let parsedWebhookUrl: URL;
  try {
    parsedWebhookUrl = new URL(webhookUrl);
  } catch {
    return NextResponse.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
  }
  if (
    parsedWebhookUrl.protocol !== "https:" ||
    parsedWebhookUrl.hostname !== "script.google.com" ||
    !/^\/macros\/s\/[^/]+\/exec$/.test(parsedWebhookUrl.pathname)
  ) {
    return NextResponse.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
  }

  try {
    const response = await postToAppsScript(parsedWebhookUrl, {
      name,
      email,
      company,
      service,
      budget,
      message,
      secret: webhookSecret,
    });

    if (!response.ok) {
      throw new Error(`Lead sheet returned HTTP ${response.status}.`);
    }

    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("ok" in result) || result.ok !== true) {
      throw new Error("Lead sheet did not confirm the submission.");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn't send your message just now. Please try again or email info@knowheresystems.com." },
      { status: 502 },
    );
  }
}
