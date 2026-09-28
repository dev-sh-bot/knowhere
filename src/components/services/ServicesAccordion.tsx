"use client";

import Link from "next/link";
import { useState } from "react";
import { Ic } from "@/components/ui/Ic";
import { Reveal } from "@/components/ui/Reveal";
import { SVC } from "@/lib/data";
import { D } from "@/lib/icons";
import { setPendingService } from "@/lib/pending-service";

export function ServicesAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="acc">
      {SVC.map((s, i) => (
        <Reveal
          key={s.name}
          as="div"
          className={`acc-item${openIdx === i ? " open" : ""}`}
          delay={Math.min(i * 0.04, 0.4)}
        >
          <button
            className="acc-head"
            type="button"
            aria-expanded={openIdx === i}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <span className="ah-num">{s.num}</span>
            <span className="ah-name">{s.name}</span>
            <span className="ah-ic">
              <Ic d={D.plus} />
            </span>
          </button>
          <div className="acc-body">
            <div className="acc-inner">
              <div className="acc-cnt">
                <p>{s.desc}</p>
                <div className="acc-cols">
                  <div>
                    <h5>WHAT’S INCLUDED</h5>
                    <ul>
                      {s.inc.map((x, j) => (
                        <li key={j}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5>TYPICAL STACK</h5>
                    <div className="tags">
                      {s.stack.map((x, j) => (
                        <span key={j}>{x}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link
                  className="btn btn-ink"
                  href="/contact"
                  onClick={() => setPendingService(s.name)}
                >
                  Discuss this service <Ic d={D.ne} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
