import { Reveal } from "@/components/ui/Reveal";
import { ENGAGE } from "@/lib/data";

export function EngageModels() {
  return (
    <section className="sec bg-paper">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="sec-label">(03) Engagement models</Reveal>
          <Reveal variant="clip" className="sec-title">
            <span>WAYS TO WORK WITH US</span>
          </Reveal>
        </div>
        <div>
          {ENGAGE.map((e, i) => (
            <Reveal key={e.t} className="eng-row" delay={i * 0.07}>
              <h3>{e.t}</h3>
              <p>{e.d}</p>
              <span className="er-meta">{e.m}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
