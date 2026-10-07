import type { Metadata } from "next";
import { WorkList } from "@/components/work/WorkList";
import { PageHero } from "@/components/ui/PageHero";
import { CASES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    `${CASES.length} case files from the Knowhere Systems archive — web, mobile, AI, cloud and social publishing products.`,
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="(01) Case files"
        title="SELECTED WORK"
        lead={`${CASES.length} projects across web, mobile and AI — explore the products, interfaces and systems we built.`}
      />
      <WorkList />
    </>
  );
}
