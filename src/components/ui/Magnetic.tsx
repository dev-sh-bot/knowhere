"use client";

import Link from "next/link";
import {
  useRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { hasFinePointer, prefersReducedMotion } from "@/lib/motion";

type MagneticBase = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

type MagneticLinkProps = MagneticBase & {
  href: string;
  type?: never;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children" | "style">;

type MagneticButtonProps = MagneticBase & {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "style" | "type">;

export type MagneticProps = MagneticLinkProps | MagneticButtonProps;

export function Magnetic(props: MagneticProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - r.left - r.width / 2;
    const dy = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${dx * 0.22}px,${dy * 0.3}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  if ("href" in props && props.href) {
    const { href, className, children, style, ...rest } = props;
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={className}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { className, children, style, type = "button", ...rest } =
    props as MagneticButtonProps;
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </button>
  );
}
