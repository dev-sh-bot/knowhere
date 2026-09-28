"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";

type ScrubTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

export function ScrubText({ text, className, style }: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll(".w");
    let ticking = false;
    const upd = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(
        0,
        Math.min(1, (vh * 0.88 - r.top) / (r.height + vh * 0.38)),
      );
      const n = Math.floor(p * words.length * 1.12);
      for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("on", i < n);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(upd);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    upd();
    return () => window.removeEventListener("scroll", onScroll);
  }, [words]);

  return (
    <p
      ref={ref}
      className={`scrub${className ? ` ${className}` : ""}`}
      style={style}
    >
      {words.map((w, i) => (
        <span className="w" key={i}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
