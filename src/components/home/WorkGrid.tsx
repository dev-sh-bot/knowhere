"use client";

import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { useCaseModal } from "@/components/layout/SiteShell";
import { CASES } from "@/lib/data";

export function WorkGrid() {
  const { openCase } = useCaseModal();
  const indices = [0, 1, 2, 3];

  return (
    <div className="work-grid">
      {indices.map((idx, i) => {
        const c = CASES[idx];
        return (
          <Reveal
            as="div"
            key={c.no}
            className={`work-item wi-${i + 1}`}
            delay={i === 1 || i === 3 ? 0.1 : 0}
            data-case={idx}
            tabIndex={0}
            role="button"
            aria-label={`Open ${c.title} case study`}
            onClick={() => openCase(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter") openCase(idx);
            }}
          >
            <div className="wi-media">
              <span className="wi-no">{c.no}</span>
              <Image
                src={c.img}
                alt={`${c.title} project`}
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="wi-meta">
              <span className="wi-title">{c.title}</span>
              <span className="wi-year">{c.homeTag}</span>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function WorkGridSection() {
  return (
    <section className="sec bg-paper">
      <div className="wrap">
        <div className="sec-head row-between">
          <div>
            <Reveal className="sec-label">(03) Selected work</Reveal>
            <Reveal variant="clip" className="sec-title">
              <span>
                CASE <em>FILES</em>
              </span>
            </Reveal>
          </div>
          <Magnetic className="btn btn-ink" href="/work">
            All projects
          </Magnetic>
        </div>
        <WorkGrid />
      </div>
    </section>
  );
}
