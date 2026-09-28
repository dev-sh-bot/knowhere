import type { Metadata } from "next";
import { WorkList } from "@/components/work/WorkList";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case files from the Knowhere Systems archive — retail, healthcare, fintech, logistics and more.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="(01) Case files"
        title="SELECTED WORK"
        lead="Five files from the archive. Names are abbreviated where NDAs apply — the numbers are not."
      />
      <WorkList />
    </>
  );
}
