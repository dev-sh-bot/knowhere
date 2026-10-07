import { Reveal } from "@/components/ui/Reveal";
import { ScrubText } from "@/components/ui/ScrubText";
import { Namepiece } from "@/components/about/Namepiece";
import { PRINCIPLES } from "@/lib/data";

export function AboutHero() {
  return (
    <div className="phero">
      <div className="wrap">
        <Reveal className="sec-label">(01) The company</Reveal>
        <Reveal delay={0.1}>
          <Namepiece />
        </Reveal>
        <Reveal as="p" className="np-hint" delay={0.2}>
          KNOWHERE (V.) — TO MAKE KNOWLEDGE PRESENT · TAP THE WORD
        </Reveal>
        <Reveal as="p" className="phero-lead" delay={0.3}>
          A software and IT services company. The name is the mission.
        </Reveal>
      </div>
    </div>
  );
}

export function AboutStory() {
  return (
    <section className="sec bg-paper">
      <div className="wrap">
        <Reveal className="sec-label">(02) The story</Reveal>
        <ScrubText
          style={{ marginTop: "2.5rem" }}
          text="Knowhere Systems builds websites, apps, cloud systems and AI products. The portfolio spans education, privacy, productivity, sales, music, operations, proposals and outdoor technology."
        />
      </div>
    </section>
  );
}

export function AboutPrinciples() {
  return (
    <section className="sec bg-paper">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="sec-label">(03) How we operate</Reveal>
          <Reveal variant="clip" className="sec-title">
            <span>HOUSE RULES</span>
          </Reveal>
        </div>
        <div>
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.t} className="pr-row" delay={i * 0.06}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSections() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
    </>
  );
}
