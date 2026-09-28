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

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const serviceRef = useRef<HTMLSelectElement | null>(null);
  const budgetRef = useRef<HTMLSelectElement | null>(null);
  const msgRef = useRef<HTMLTextAreaElement | null>(null);
  const [errs, setErrs] = useState<FormErrors>({});
  const preselect = useRef(takePendingService());

  const clearErr = (k: keyof FormErrors) =>
    setErrs((e) => {
      const n = { ...e };
      delete n[k];
      return n;
    });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    const subject = encodeURIComponent(
      `Project inquiry — ${name}${company ? ` (${company})` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Service: ${serviceRef.current?.value}`,
        `Budget: ${budgetRef.current?.value}`,
        "",
        message,
        "",
        "— Sent from the Knowhere Systems website",
      ].join("\n"),
    );
    toast("TRANSMISSION PREPARED — OPENING YOUR MAIL APP");
    setTimeout(() => {
      location.href = `mailto:Info@knowheresystems.com?subject=${subject}&body=${body}`;
    }, 400);
    e.currentTarget.reset();
    setErrs({});
  };

  return (
    <Reveal className="c-form" delay={0.1}>
      <form id="contact-form" noValidate onSubmit={submit}>
        <h2>SEND A TRANSMISSION</h2>
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
        <Magnetic type="submit" className="btn btn-lime">
          Send transmission <Ic d={D.ne} />
        </Magnetic>
        <p className="f-note">
          NO DATA IS STORED ON THIS SITE — SUBMITTING OPENS YOUR MAIL CLIENT
          WITH EVERYTHING PRE-FILLED, ADDRESSED TO INFO@KNOWHERESYSTEMS.COM.
        </p>
      </form>
    </Reveal>
  );
}
