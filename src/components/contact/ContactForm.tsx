"use client";

import { useRef, useState, type FormEvent } from "react";
import { Ic } from "@/components/ui/Ic";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_OPTIONS } from "@/lib/data";
import { D } from "@/lib/icons";
import { takePendingService } from "@/lib/pending-service";
import { toast } from "@/lib/toast";

type FormErrors = {
  name?: string;
  email?: string;
  msg?: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const websiteRef = useRef<HTMLInputElement | null>(null);
  const serviceRef = useRef<HTMLSelectElement | null>(null);
  const budgetRef = useRef<HTMLSelectElement | null>(null);
  const msgRef = useRef<HTMLTextAreaElement | null>(null);
  const [errs, setErrs] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const preselect = useRef(takePendingService());

  const clearErr = (k: keyof FormErrors) =>
    setErrs((e) => {
      const n = { ...e };
      delete n[k];
      return n;
    });

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;

    const name = (nameRef.current?.value || "").trim();
    const email = (emailRef.current?.value || "").trim();
    const message = (msgRef.current?.value || "").trim();
    const next: FormErrors = {};
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = "That email doesn't look right.";
    }
    if (message.length < 10) {
      next.msg = "Give us at least a sentence to work with.";
    }
    setErrs(next);
    if (Object.keys(next).length) {
      toast("A FEW FIELDS NEED ATTENTION");
      return;
    }

    const company = (companyRef.current?.value || "").trim();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          service: serviceRef.current?.value || "",
          budget: budgetRef.current?.value || "",
          message,
          website: websiteRef.current?.value || "",
        }),
      });

      const result = (await response.json()) as { error?: string; ok?: boolean };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Your message couldn't be sent.");
      }

      form.reset();
      setErrs({});
      setStatus("success");
      toast("MESSAGE RECEIVED — WE’LL BE IN TOUCH");
    } catch {
      setStatus("error");
      toast("TRANSMISSION FAILED — PLEASE TRY AGAIN");
    }
  };

  return (
    <Reveal className="c-form" delay={0.1}>
      <form id="contact-form" noValidate onSubmit={submit} aria-busy={status === "submitting"}>
        <h2>SEND A TRANSMISSION</h2>
        <div className="f-trap" aria-hidden="true">
          <label htmlFor="cf-website">Leave this field empty</label>
          <input
            id="cf-website"
            ref={websiteRef}
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="f-row">
          <div className={`f-field${errs.name ? " err" : ""}`}>
            <label htmlFor="cf-name">NAME *</label>
            <input
              id="cf-name"
              ref={nameRef}
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              onChange={() => clearErr("name")}
            />
            <p className="f-err">{errs.name || ""}</p>
          </div>
          <div className={`f-field${errs.email ? " err" : ""}`}>
            <label htmlFor="cf-email">EMAIL *</label>
            <input
              id="cf-email"
              ref={emailRef}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              onChange={() => clearErr("email")}
            />
            <p className="f-err">{errs.email || ""}</p>
          </div>
        </div>
        <div className="f-row">
          <div className="f-field">
            <label htmlFor="cf-company">COMPANY</label>
            <input
              id="cf-company"
              ref={companyRef}
              type="text"
              autoComplete="organization"
              placeholder="Optional"
            />
          </div>
          <div className="f-field">
            <label htmlFor="cf-service">SERVICE</label>
            <select
              id="cf-service"
              ref={serviceRef}
              defaultValue={preselect.current || "Web Development"}
            >
              {SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="f-field">
          <label htmlFor="cf-budget">BUDGET</label>
          <select id="cf-budget" ref={budgetRef} defaultValue="Under $3k">
            <option>Under $3k</option>
            <option>$3k – $10k</option>
            <option>$10k – $30k</option>
            <option>$30k+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className={`f-field${errs.msg ? " err" : ""}`}>
          <label htmlFor="cf-msg">MESSAGE *</label>
          <textarea
            id="cf-msg"
            ref={msgRef}
            rows={5}
            placeholder="What are you building? Where is it stuck?"
            onChange={() => clearErr("msg")}
          />
          <p className="f-err">{errs.msg || ""}</p>
        </div>
        <Magnetic type="submit" className="btn btn-lime" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send transmission"} <Ic d={D.ne} />
        </Magnetic>
        <p className="f-feedback" role="status" aria-live="polite">
          {status === "success"
            ? "MESSAGE RECEIVED. WE’LL FOLLOW UP WITH NEXT STEPS."
            : status === "error"
              ? "WE COULDN’T SEND THAT MESSAGE. PLEASE TRY AGAIN OR EMAIL INFO@KNOWHERESYSTEMS.COM."
              : ""}
        </p>
        <p className="f-note">
          YOUR PROJECT DETAILS ARE SENT TO KNOWHERE SYSTEMS AND STORED IN OUR PRIVATE LEADS SHEET.
        </p>
      </form>
    </Reveal>
  );
}
