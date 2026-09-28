import type { Metadata } from "next";
import { AboutSections } from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Knowhere Systems — an IT agency founded in Hyderabad in 2020. The name is the mission.",
};

export default function AboutPage() {
  return <AboutSections />;
}
