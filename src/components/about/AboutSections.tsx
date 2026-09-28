import Image from "next/image";
import { Clock } from "@/components/ui/Clock";
import { Reveal } from "@/components/ui/Reveal";
import { ScrubText } from "@/components/ui/ScrubText";
import { Namepiece } from "@/components/about/Namepiece";
import { PRINCIPLES, TIMELINE } from "@/lib/data";

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
          An IT agency founded in Hyderabad in 2020. Small on purpose, senior by
          default — the name is the mission.
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
          text="Knowhere started in 2020 in a rented house in Al-Waheed Colony — one engineer, one secondhand laptop, and a stubborn refusal to ship anything half-built. Five years on, we are twelve people serving clients in six countries, still small on purpose."
        />
      </div>
    </section>
  );
}

export function AboutLeadership() {
  return (
    <section className="sec bg-paper" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="sec-label">(03) Leadership</Reveal>
        <div className="founder-grid" style={{ marginTop: "2.5rem" }}>
          <Reveal className="f-photo">
            <Image
              src="https://picsum.photos/seed/huzaifa-ali/800/1000.jpg"
              alt="Syed Huzaifa Ali, founder of Knowhere Systems"
              width={800}
              height={1000}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
            <span className="f-tag">FOUNDER — HZ.ALI</span>
          </Reveal>
          <Reveal className="f-info" delay={0.12}>
            <h2 className="f-name">SYED HUZAIFA ALI</h2>
            <span className="f-role">FOUNDER &amp; PRINCIPAL ENGINEER</span>
            <blockquote className="f-quote">
              “Every system we ship has to survive a power cut, a 3G connection
              and a Monday morning. That’s the bar. Everything above it is
              craft.”
            </blockquote>
            <p className="f-bio">
              Huzaifa founded Knowhere after years of watching good projects die
              inside big agencies. Knowhere is the counter-model: small, senior,
              directly accountable. He still reviews every architecture before
              it ships.
            </p>
            <div className="f-meta">
              BASED: HYDERABAD, SINDH — PK
              <br />
              FOCUS: ARCHITECTURE &amp; DELIVERY
              <br />
              <a href="mailto:Info@knowheresystems.com">
                INFO@KNOWHERESYSTEMS.COM
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutPrinciples() {
  return (
    <section className="sec bg-ink">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="sec-label">(04) How we operate</Reveal>
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

export function AboutTimeline() {
  return (
    <section className="sec bg-paper">
      <div className="wrap">
        <Reveal className="sec-label">(05) Timeline</Reveal>
        <div style={{ marginTop: "2rem" }}>
          {TIMELINE.map((t, i) => (
            <Reveal key={t.y} className="tl-row" delay={i * 0.06}>
              <b>{t.y}</b>
              <p>{t.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutLocation() {
  return (
    <section className="sec bg-ink">
      <div className="wrap loc-grid">
        <svg
          className="loc-mark"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="8.4" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M14 1.5v5.4M14 21.1v5.4M1.5 14h5.4M21.1 14h5.4"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="14" cy="14" r="2.2" fill="currentColor" />
        </svg>
        <Reveal className="loc-coords">
          25.3964° N
          <br />
          68.3712° E
        </Reveal>
        <Reveal delay={0.1}>
          <h3>HYDERABAD, SINDH — PAKISTAN</h3>
          <p>
            House 279/5-6, Al-Waheed Colony,
            <br />
            Hyderabad 71000, Sindh, Pakistan
          </p>
        </Reveal>
        <Reveal className="loc-clock" delay={0.2}>
          <b>
            <Clock />
          </b>
          <span>LOCAL TIME — PKT (UTC+5)</span>
          <span>WORKING HOURS: 09:00–18:00, MON–SAT</span>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutSections() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutLeadership />
      <AboutPrinciples />
      <AboutTimeline />
      <AboutLocation />
    </>
  );
}
