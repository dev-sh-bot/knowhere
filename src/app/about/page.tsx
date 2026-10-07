import type { Metadata } from "next";
import { AboutSections } from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Knowhere Systems builds websites, apps, cloud systems and AI products. The name is the mission.",
};

export default function AboutPage() {
  return <AboutSections />;
}
