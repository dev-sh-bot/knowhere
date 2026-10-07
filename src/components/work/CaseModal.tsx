"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Ic } from "@/components/ui/Ic";
import { CASES } from "@/lib/data";
import { D } from "@/lib/icons";

type CaseModalProps = {
  idx: number;
  onClose: () => void;
};

export function CaseModal({ idx, onClose }: CaseModalProps) {
  const [show, setShow] = useState(false);
  const closingRef = useRef(false);
  const closeRef = useRef(() => {});

  const close = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setShow(false);
    setTimeout(onClose, 420);
  };
  closeRef.current = close;

  useEffect(() => {
    const r = requestAnimationFrame(() =>
      requestAnimationFrame(() => setShow(true)),
    );
    document.body.classList.add("lock");
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRef.current();
    };
    window.addEventListener("keydown", esc);
    return () => {
      cancelAnimationFrame(r);
      document.body.classList.remove("lock");
      window.removeEventListener("keydown", esc);
    };
  }, []);

  const c = CASES[idx];

  return (
    <div
      className={`modal${show ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-backdrop" onClick={close} />
      <div className="modal-panel">
        <button className="modal-close" type="button" onClick={close}>
          CLOSE <Ic d={D.x} />
        </button>
        <span className="m-no">CASE FILE {c.no}</span>
        <h2 className="m-title">{c.title}</h2>
        <div className="m-meta">
          {c.sector} — {c.loc}
        </div>
        <div className="m-img">
          <Image
            src={c.img}
            alt={`${c.title} project`}
            width={1536}
            height={1024}
            sizes="(max-width: 900px) 100vw, 800px"
            priority
          />
        </div>
        <div className="m-cols">
          <div>
            <h5>THE CHALLENGE</h5>
            <p>{c.ch}</p>
          </div>
          <div>
            <h5>THE BUILD</h5>
            <p>{c.bd}</p>
          </div>
        </div>
        <div className="m-outs">
          {c.outs.map((o, i) => (
            <div key={i}>
              <b>{o[0]}</b>
              <span>{o[1]}</span>
            </div>
          ))}
        </div>
        <div className="m-stack">
          <h5>STACK</h5>
          <div className="tags">
            {c.stack.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
        <Link className="btn btn-lime" href="/contact" onClick={close}>
          Build something like this <Ic d={D.ne} />
        </Link>
      </div>
    </div>
  );
}
