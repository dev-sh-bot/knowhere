"use client";

import Link from "next/link";
import { Clock } from "@/components/ui/Clock";
import { Ic } from "@/components/ui/Ic";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { NAVLINKS } from "@/lib/data";
import { D } from "@/lib/icons";

export function Footer() {
  return (
    <footer>
      <div className="cta-band">
        <div className="wrap cta-flex">
          <div>
            <Reveal as="h2" className="cta-title">
              From nowhere,
              <br />
              to <em>now here.</em>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Magnetic className="btn btn-ink" href="/contact">
              Start the move <Ic d={D.r} />
            </Magnetic>
            <p className="cta-note">Clear scope. A practical next step.</p>
          </Reveal>
        </div>
      </div>
      <div className="wrap">
        <Link className="foot-word" href="/" aria-label="Knowhere home">
          KNOWHERE
        </Link>
        <div className="foot-grid">
          <div className="foot-intro">
            <h4>KNOWHERE SYSTEMS</h4>
            <p>
              Knowhere Systems builds websites, apps and systems for companies
              anywhere.
            </p>
          </div>
          <div>
            <h4>NAVIGATE</h4>
            {NAVLINKS.map((n) => (
              <Link key={n.key} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>CONTACT</h4>
            <a href="mailto:Info@knowheresystems.com">Info@knowheresystems.com</a>
            <a href="tel:+923133054378">+92 313 3054378</a>
            <span>Mon–Sat, 09:00–18:00</span>
          </div>
        </div>
        <div className="foot-bar">
          <span>© 2026 KNOWHERE SYSTEMS</span>
          <span>
            LOCAL TIME · <Clock />
          </span>
          <button
            id="to-top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            BACK TO TOP <Ic d={D.up} />
          </button>
        </div>
      </div>
    </footer>
  );
}
