import type { Metadata } from "next";
import { EngageModels } from "@/components/services/EngageModels";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServicesAccordion } from "@/components/services/ServicesAccordion";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twelve IT disciplines — web apps, mobile, cloud, AI, security and more. Scoped in writing, priced upfront.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="(01) Capabilities"
        title="SERVICES"
        lead="Twelve disciplines, one accountable delivery process. Web, mobile, cloud, AI, data and security — scoped in writing and priced before work begins."
      />
      <section className="sec bg-paper">
        <div className="wrap">
          <ServicesAccordion />
        </div>
      </section>
      <ProcessSteps />
      <EngageModels />
    </>
  );
}
