"use client";

import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    document.body.classList.add("cursor-on");
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let rx = x;
    let ry = y;
    let s = 1;
    let ts = 1;
    let on = false;
    let raf = 0;
    const HOV =
      "a,button,[data-case],input,select,textarea,label,.f-btn,.acc-head,.namepiece,.svc-row";

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      on = true;
      const t = e.target as Element | null;
      const h = t && t.closest ? t.closest(HOV) : null;
      ts = h ? 1.75 : 1;
    };
    const out = () => {
      on = false;
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      s += (ts - s) * 0.15;
      dot.style.opacity = on ? "1" : "0";
      ring.style.opacity = on ? "1" : "0";
      dot.style.transform = `translate(${x - 3}px,${y - 3}px)`;
      ring.style.transform = `translate(${rx - 18}px,${ry - 18}px) scale(${s})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", out);
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("cursor-on");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
