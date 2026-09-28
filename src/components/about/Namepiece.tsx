"use client";

import { useEffect, useState } from "react";

export function Namepiece() {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSplit(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`namepiece${split ? " split" : ""}`}
      tabIndex={0}
      role="button"
      aria-label="Nowhere becomes now here — tap to toggle"
      onClick={() => setSplit((s) => !s)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSplit((s) => !s);
        }
      }}
    >
      <span className="np-half np-now">NOW</span>
      <span className="np-gap">
        <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="8.4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M14 1.5v5.4M14 21.1v5.4M1.5 14h5.4M21.1 14h5.4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="14" cy="14" r="2.4" fill="currentColor" />
        </svg>
      </span>
      <span className="np-half np-here">HERE</span>
      <span className="np-strike" aria-hidden="true" />
    </div>
  );
}
