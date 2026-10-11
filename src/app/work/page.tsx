import type { Metadata } from "next";
import { WorkList } from "@/components/work/WorkList";
import { PageHero } from "@/components/ui/PageHero";
import { CASES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    `${CASES.length} case files from the Knowhere Systems archive — web, mobile, AI, cloud, brand design and content.`,
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="(01) Case files"
        title="SELECTED WORK"
        lead={`${CASES.length} case files across web, mobile, AI, brand design and content — explore our products and creative work.`}
      />
      <WorkList />
    </>
  );
}
