import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Knowhere Systems about your website, app, software or cloud project and the next step you need.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="(01) Contact"
        title="LET’S TALK"
        lead="Tell us what you’re building and where you need help. Include useful context so the project scope and next steps are clear."
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
