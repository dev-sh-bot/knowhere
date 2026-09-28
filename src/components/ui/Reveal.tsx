"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { prefersReducedMotion } from "@/lib/motion";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: "clip";
  delay?: number;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLElement>, "as" | "style" | "className" | "children">;

export function Reveal<T extends ElementType = "div">({
  as,
  variant,
  delay,
  className,
  children,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [inS, setInS] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setInS(true);
      return;
    }
    const io = new IntersectionObserver(
      (ens) => {
        for (let i = 0; i < ens.length; i++) {
          if (ens[i].isIntersecting) {
            setInS(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `${className || ""}${inS ? " is-in" : ""}`.trim();
  const st: CSSProperties & { "--d"?: string } = { ...(style || {}) };
  if (delay) st["--d"] = `${delay}s`;

  return (
    <Tag
      ref={ref}
      data-reveal={variant === "clip" ? "clip" : ""}
      className={cls}
      style={st}
      {...rest}
    >
      {children}
    </Tag>
  );
}
