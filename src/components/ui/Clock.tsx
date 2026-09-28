"use client";

import { useEffect, useState } from "react";

const PKT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function Clock() {
  const [t, setT] = useState<string | null>(null);

  useEffect(() => {
    setT(PKT.format(new Date()));
    const id = setInterval(() => setT(PKT.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{t ?? "--:--:--"}</span>;
}
