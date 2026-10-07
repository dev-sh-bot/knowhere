"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Ic } from "@/components/ui/Ic";
import { Reveal } from "@/components/ui/Reveal";
import { SVC, type Service } from "@/lib/data";
import { D } from "@/lib/icons";
import { hasFinePointer } from "@/lib/motion";

export function ServicesIndex() {
  const pvRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const tagRef = useRef<HTMLSpanElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const shown = useRef(false);

  useEffect(() => {
    if (!hasFinePointer()) return;
    let raf = 0;
    const loop = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.14;
      cur.current.y += (pos.current.y - cur.current.y) * 0.14;
      const rot = Math.max(
        -7,
        Math.min(7, (pos.current.x - cur.current.x) * 0.05),
      );
      const pv = pvRef.current;
      if (pv) {
        pv.style.transform = `translate(${cur.current.x}px,${cur.current.y}px) rotate(${rot}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const show = (s: Service) => {
    if (!hasFinePointer() || !pvRef.current || !s.img) return;
    if (imgRef.current) imgRef.current.src = s.img;
    if (tagRef.current) tagRef.current.textContent = s.num;
    if (!shown.current) {
      shown.current = true;
      cur.current.x = pos.current.x;
      cur.current.y = pos.current.y;
    }
    pvRef.current.classList.add("on");
  };

  const hide = () => {
    shown.current = false;
    if (pvRef.current) pvRef.current.classList.remove("on");
  };

  return (
    <>
      <ul
        className="svc-index"
        onMouseMove={(e) => {
          pos.current.x = e.clientX + 26;
          pos.current.y = e.clientY - 110;
        }}
        onMouseLeave={hide}
      >
        {SVC.slice(0, 6).map((s, i) => (
          <Reveal
            as="li"
            key={s.name}
            className="svc-row"
            delay={i * 0.06}
            onMouseEnter={() => show(s)}
          >
            <Link href="/services">
              <span className="sr-num">{s.num}</span>
              <span className="sr-name">{s.name}</span>
              <Ic d={D.ne} className="sr-arrow" />
            </Link>
          </Reveal>
        ))}
      </ul>
      <div className="svc-more">
        <Link className="link-arrow" href="/services">
          All {SVC.length} disciplines <Ic d={D.ne} />
        </Link>
        <span className="svc-more-note">
          Scoped in writing — priced before we start
        </span>
      </div>
      <div className="svc-preview" ref={pvRef}>
        {/* eslint-disable-next-line @next/next/no-img-element -- hover preview swaps src dynamically */}
        <img ref={imgRef} alt="" />
        <span className="pv-tag" ref={tagRef}>
          01
        </span>
      </div>
    </>
  );
}
