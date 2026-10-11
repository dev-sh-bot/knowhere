import type { Metadata } from "next";
import { EngageModels } from "@/components/services/EngageModels";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServicesAccordion } from "@/components/services/ServicesAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { SVC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    `${SVC.length} disciplines — web apps, mobile, cloud, AI, security, brand design and content. Scoped in writing, priced upfront.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="(01) Capabilities"
        title="SERVICES"
        lead={`${SVC.length} disciplines, one accountable delivery process. Web, mobile, cloud, AI, design and content — scoped in writing and priced before work begins.`}
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
