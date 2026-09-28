import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where you are — and where you’d rather be. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="(01) Contact"
        title="LET’S TALK"
        lead="Tell us where you are — and where you’d rather be. An engineer reads every message, and replies within one business day."
      />
      <section className="sec bg-paper">
        <div className="wrap contact-grid">
          <div>
            <ContactChannels />
          </div>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
