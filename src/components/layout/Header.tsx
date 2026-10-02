"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock } from "@/components/ui/Clock";
import { Magnetic } from "@/components/ui/Magnetic";
import { Mark } from "@/components/ui/Mark";
import { NAVLINKS } from "@/lib/data";

function routeKey(pathname: string): string {
  if (pathname === "/") return "home";
  const seg = pathname.replace(/^\//, "").split("/")[0];
  return seg || "home";
}

export function Header() {
  const pathname = usePathname();
  const route = routeKey(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("lock");
    return () => document.body.classList.remove("lock");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="wrap header-in">
          <Link className="logo" href="/" aria-label="Knowhere Systems home">
            <Mark />
            <span className="logo-text">
              KNOWHERE<small>SYSTEMS</small>
            </span>
          </Link>
          <nav className="main-nav" aria-label="Primary">
            {NAVLINKS.map((n, i) => (
              <Link
                key={n.key}
                href={n.href}
                className={route === n.key ? "active" : ""}
              >
                <i>{String(i + 1).padStart(2, "0")}</i>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="header-right">
            <Magnetic className="btn btn-lime" href="/contact">
              Start a project
            </Magnetic>
            <button
              className={`burger${open ? " open" : ""}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <nav className="mm-nav" aria-label="Mobile">
          {NAVLINKS.map((n, i) => (
            <Link key={n.key} href={n.href} onClick={close}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mm-info">
          <a href="mailto:Info@knowheresystems.com">INFO@KNOWHERESYSTEMS.COM</a>
          <a href="tel:+923133054378">+92 313 3054378</a>
          <span>
            LOCAL TIME — <Clock />
          </span>
        </div>
      </div>
    </>
  );
}
