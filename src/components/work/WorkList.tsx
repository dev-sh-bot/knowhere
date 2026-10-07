"use client";

import Image from "next/image";
import { useState } from "react";
import { Ic } from "@/components/ui/Ic";
import { Reveal } from "@/components/ui/Reveal";
import { useCaseModal } from "@/components/layout/SiteShell";
import { CASES, FILTERS } from "@/lib/data";
import { D } from "@/lib/icons";

export function WorkList() {
  const { openCase } = useCaseModal();
  const [filter, setFilter] = useState("all");

  const items: { c: (typeof CASES)[number]; i: number }[] = [];
  CASES.forEach((c, i) => {
    if (filter === "all" || c.tags.indexOf(filter) > -1) {
      items.push({ c, i });
    }
  });

  return (
    <section className="sec bg-paper">
      <div className="wrap">
        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.k}
              type="button"
              className={`f-btn${filter === f.k ? " on" : ""}`}
              onClick={() => setFilter(f.k)}
            >
              {f.l}
            </button>
          ))}
        </div>
        <div className="wl-list">
          {items.map(({ c, i }) => (
            <Reveal
              as="article"
              key={`${filter}-${i}`}
              className="wl-item"
              data-case={i}
              tabIndex={0}
              role="button"
              aria-label={`Open ${c.title} case study`}
              onClick={() => openCase(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter") openCase(i);
              }}
            >
              <div className="wl-media">
                <Image
                  src={c.img}
                  alt={`${c.title} project`}
                width={1536}
                height={1024}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div className="wl-info">
                <h3 className="wl-title">{c.title}</h3>
                <p className="wl-blurb">{c.blurb}</p>
                <div className="wl-meta">
                  {c.sector} — {c.loc}
                </div>
                <span className="wl-open">
                  OPEN CASE FILE <Ic d={D.ne} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
