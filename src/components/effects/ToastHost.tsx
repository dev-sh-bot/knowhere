"use client";

import { useEffect, useRef, useState } from "react";
import { subscribeToast } from "@/lib/toast";

type ToastEntry = { id: number; msg: string };

function ToastItem({ msg, onDone }: { msg: string; onDone: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = requestAnimationFrame(() =>
      requestAnimationFrame(() => el.classList.add("in")),
    );
    return () => cancelAnimationFrame(r);
  }, []);

  return (
    <div ref={ref} className="toast" onClick={onDone} role="status">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M4 12l5 5L20 6" />
      </svg>
      <span>{msg}</span>
    </div>
  );
}

export function ToastHost() {
  const [list, setList] = useState<ToastEntry[]>([]);

  useEffect(() => {
    return subscribeToast((msg) => {
      const id = Date.now() + Math.random();
      setList((ts) => ts.concat([{ id, msg }]));
      setTimeout(() => setList((ts) => ts.filter((t) => t.id !== id)), 4600);
    });
  }, []);

  const remove = (id: number) => setList((ts) => ts.filter((t) => t.id !== id));

  return (
    <div id="toast-wrap" aria-live="polite">
      {list.map((t) => (
        <ToastItem key={t.id} msg={t.msg} onDone={() => remove(t.id)} />
      ))}
    </div>
  );
}
