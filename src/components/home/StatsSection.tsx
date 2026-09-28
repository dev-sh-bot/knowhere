import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="stats bg-ink">
      <div className="wrap stats-row">
        {STATS.map((st, i) => (
          <Reveal key={st.label} className="stat" delay={i * 0.08}>
            <span className="st-n">
              <Counter to={st.n} />
              <i>{st.suf}</i>
            </span>
            <span className="st-l">{st.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
