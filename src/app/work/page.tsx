import type { Metadata } from "next";
import { WorkList } from "@/components/work/WorkList";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Eight case files from the Knowhere Systems archive — education, privacy, AI, sales, music, ERP, proposals and outdoors.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="(01) Case files"
        title="SELECTED WORK"
        lead="Eight projects across web, mobile and AI — explore the products, interfaces and systems we built."
      />
      <WorkList />
    </>
  );
}
