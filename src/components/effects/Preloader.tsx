"use client";

import { useEffect, useRef, useState } from "react";
import { Mark } from "@/components/ui/Mark";
import { prefersReducedMotion } from "@/lib/motion";

type PreloaderProps = {
  onDone: () => void;
};

export function Preloader({ onDone }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("BOOTING SYSTEMS");
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const t0 = performance.now();
    const dur = prefersReducedMotion() ? 260 : 1900;
    let raf = 0;
    const frame = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      const v = Math.round(e * 100);
      setCount(v);
      setStatus(
        v < 35
          ? "BOOTING SYSTEMS"
          : v < 72
            ? "CALIBRATING GRID"
            : "LOCATING — NOW HERE",
      );
      if (p < 1) raf = requestAnimationFrame(frame);
      else
        setTimeout(() => {
          setDone(true);
          document.body.classList.remove("lock");
          onDoneRef.current();
          setTimeout(() => setGone(true), 900);
        }, 180);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;

  return (
    <div id="preloader" className={done ? "done" : ""}>
      <div className="pl-top">
        <Mark />
        <div className="pl-word">
          {"KNOWHERE".split("").map((c, i) => (
            <span key={i} style={{ ["--i" as string]: i } as React.CSSProperties}>
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="pl-bottom">
        <span className="pl-status">{status}</span>
        <span className="pl-count">{String(count).padStart(3, "0")}</span>
      </div>
      <div className="pl-bar">
        <i id="pl-fill" style={{ transform: `scaleX(${count / 100})` }} />
      </div>
    </div>
  );
}
