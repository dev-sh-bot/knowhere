import { Reveal } from "@/components/ui/Reveal";
import { STEPS } from "@/lib/data";

export function ProcessSteps() {
  return (
    <section className="sec bg-ink">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="sec-label">(02) How we ship</Reveal>
          <Reveal variant="clip" className="sec-title">
            <span>THE PROCESS</span>
          </Reveal>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 0.07}>
              <span className="st-num2">{s.n}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
              <span className="st-meta">{s.m}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
