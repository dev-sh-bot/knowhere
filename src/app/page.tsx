import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { StatsSection } from "@/components/home/StatsSection";
import { WorkGridSection } from "@/components/home/WorkGrid";
import { Ic } from "@/components/ui/Ic";
import { Reveal } from "@/components/ui/Reveal";
import { ScrubText } from "@/components/ui/ScrubText";
import { D } from "@/lib/icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="sec bg-paper">
        <div className="wrap">
          <Reveal className="sec-label">(01) Who we are</Reveal>
          <ScrubText
            style={{ marginTop: "2.5rem" }}
            text="A small senior team building for companies in six countries. Websites, apps, cloud, AI — no juniors learning on your budget, and no handover to a team you never met."
          />
          <Reveal className="intro-foot">
            <span>— THE POINT, IN 30 WORDS</span>
            <Link className="link-arrow" href="/about">
              More about the company <Ic d={D.ne} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="sec bg-ink">
        <div className="wrap">
          <div className="sec-head row-between">
            <div>
              <Reveal className="sec-label">(02) Capabilities</Reveal>
              <Reveal variant="clip" className="sec-title">
                <span>
                  BUILT <em>IN-HOUSE</em>
                </span>
              </Reveal>
            </div>
            <Reveal as="p" className="lead" delay={0.1}>
              One accountable team across the whole stack — so nothing gets lost
              between the design file and production.
            </Reveal>
          </div>
          <ServicesIndex />
        </div>
      </section>
      <WorkGridSection />
      <StatsSection />
    </>
  );
}
