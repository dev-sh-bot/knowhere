"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type CounterProps = {
  to: number;
};

export function Counter({ to }: CounterProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(
      (ens) => {
        for (let i = 0; i < ens.length; i++) {
          if (ens[i].isIntersecting) {
            io.disconnect();
            const t0 = performance.now();
            const dur = 1300;
            const step = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const e = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(to * e));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <b ref={ref}>{val}</b>;
}
