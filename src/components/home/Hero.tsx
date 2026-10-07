"use client";

import { useEffect, useRef, useState } from "react";
import { Ic } from "@/components/ui/Ic";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { D } from "@/lib/icons";
import { prefersReducedMotion } from "@/lib/motion";

type NodePt = { x: number; y: number; i: number };
type Ripple = { x: number; y: number; r: number };

export function Hero() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const cvRef = useRef<HTMLCanvasElement | null>(null);
  const [inCls, setInCls] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInCls(true), 350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    const cv = cvRef.current;
    if (!host || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let nodes: NodePt[] = [];
    const ripples: Ripple[] = [];
    let w = 0;
    let h = 0;
    let mx = -9999;
    let my = -9999;
    let mOn = false;
    let vis = false;
    let alive = true;
    let raf = 0;

    const resize = () => {
      w = host.clientWidth;
      h = host.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = [];
      const sp = Math.max(40, Math.round(w / 30));
      for (let y = sp / 2; y < h; y += sp) {
        for (let x = sp / 2; x < w; x += sp) {
          nodes.push({ x, y, i: 0 });
        }
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      mOn = true;
    };
    const onLeave = () => {
      mOn = false;
    };
    const onClick = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0 });
    };

    const vio = new IntersectionObserver((ens) => {
      vis = ens[0].isIntersecting;
    });
    vio.observe(host);

    const loop = (t: number) => {
      if (!alive) return;
      raf = requestAnimationFrame(loop);
      if (!vis || document.hidden || !w) return;
      ctx.clearRect(0, 0, w, h);
      const md = Math.hypot(w, h);
      const R = 210;

      for (let k = ripples.length - 1; k >= 0; k--) {
        const rp = ripples[k];
        rp.r += 7;
        if (rp.r > md) ripples.splice(k, 1);
      }

      // Torch: a soft lime pool of light tracking the cursor.
      if (mOn) {
        const gr = ctx.createRadialGradient(mx, my, 0, mx, my, R * 1.25);
        gr.addColorStop(0, "rgba(198,255,63,.16)");
        gr.addColorStop(0.45, "rgba(198,255,63,.05)");
        gr.addColorStop(1, "rgba(198,255,63,0)");
        ctx.fillStyle = gr;
        ctx.fillRect(mx - R * 1.3, my - R * 1.3, R * 2.6, R * 2.6);
      }

      const hot: NodePt[] = [];
      ctx.lineCap = "round";

      for (let n = 0; n < nodes.length; n++) {
        const node = nodes[n];
        let tg = 0;
        let ox = 0;
        let oy = 0;
        if (mOn) {
          const dx = node.x - mx;
          const dy = node.y - my;
          const d = Math.hypot(dx, dy);
          if (d < R) {
            tg = 1 - d / R;
            const f = (tg * 14) / (d || 1);
            ox = dx * f;
            oy = dy * f;
          }
        }
        for (let k = 0; k < ripples.length; k++) {
          const rp = ripples[k];
          const dd = Math.abs(Math.hypot(node.x - rp.x, node.y - rp.y) - rp.r);
          if (dd < 60) {
            const v = 1 - dd / 60;
            if (v > tg) tg = v;
          }
        }
        node.i += (tg - node.i) * 0.14;

        const amb = Math.sin(t * 0.0006 + node.x * 0.011 + node.y * 0.008);
        const e = node.i * node.i;
        const s = 2.6 + amb * 0.6 + node.i * 6.2;
        const a = 0.14 + amb * 0.05 + node.i * 0.86;
        const r = Math.round(242 + (198 - 242) * node.i);
        const g = Math.round(239 + (255 - 239) * node.i);
        const b = Math.round(228 + (63 - 228) * node.i);
        const X = node.x + ox;
        const Y = node.y + oy;

        ctx.lineWidth = 1.15 + e * 1.1;
        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.shadowBlur = e * 22;
        ctx.shadowColor = e > 0.02 ? "rgba(198,255,63,.85)" : "transparent";
        ctx.beginPath();
        ctx.moveTo(X - s, Y);
        ctx.lineTo(X + s, Y);
        ctx.moveTo(X, Y - s);
        ctx.lineTo(X, Y + s);
        ctx.stroke();

        if (node.i > 0.34) hot.push({ x: X, y: Y, i: node.i });
      }

      // Constellation: lit nodes wire themselves together.
      ctx.shadowBlur = 0;
      ctx.lineWidth = 1;
      const link = 118;
      for (let i = 0; i < hot.length; i++) {
        for (let j = i + 1; j < hot.length; j++) {
          const d = Math.hypot(hot[i].x - hot[j].x, hot[i].y - hot[j].y);
          if (d > link) continue;
          const a = (1 - d / link) * Math.min(hot[i].i, hot[j].i) * 0.5;
          ctx.strokeStyle = `rgba(198,255,63,${a})`;
          ctx.beginPath();
          ctx.moveTo(hot[i].x, hot[i].y);
          ctx.lineTo(hot[j].x, hot[j].y);
          ctx.stroke();
        }
      }
    };

    resize();
    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    host.addEventListener("click", onClick);
    window.addEventListener("resize", resize);
    const ping = setInterval(() => {
      if (!prefersReducedMotion() && vis && !document.hidden && w) {
        ripples.push({ x: Math.random() * w, y: Math.random() * h, r: 0 });
      }
    }, 5200);
    raf = requestAnimationFrame(loop);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      clearInterval(ping);
      vio.disconnect();
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      host.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={hostRef} className={`hero${inCls ? " hero-in" : ""}`}>
      <canvas id="field-canvas" ref={cvRef} aria-hidden="true" />
      <div className="hero-badge">
        <svg className="badge-ring" viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path
              id="bc"
              d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            />
          </defs>
          <text>
            <textPath href="#bc">
              YOU ARE NOW HERE · KNOWHERE SYSTEMS · IT SERVICES ·{" "}
            </textPath>
          </text>
        </svg>
        <svg
          className="badge-core"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="8.4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M14 1.5v5.4M14 21.1v5.4M1.5 14h5.4M21.1 14h5.4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="14" cy="14" r="2.4" fill="currentColor" />
        </svg>
      </div>
      <div className="wrap hero-inner">
        <Reveal className="hero-top">
          <span className="hero-kick">
            IT Services — Engineering, Design &amp; Cloud
          </span>
          <span className="hero-status">Taking on new work</span>
        </Reveal>
        <div className="hero-mid">
          <h1 className="hero-word" aria-label="Knowhere">
            <span className="lt" style={{ ["--i" as string]: 0 } as React.CSSProperties}>
              <i>K</i>
            </span>
            <span className="grp">
              <span className="lt" style={{ ["--i" as string]: 1 } as React.CSSProperties}>
                <i>N</i>
              </span>
              <span className="lt" style={{ ["--i" as string]: 2 } as React.CSSProperties}>
                <i>O</i>
              </span>
              <span className="lt" style={{ ["--i" as string]: 3 } as React.CSSProperties}>
                <i>W</i>
              </span>
            </span>
            <span className="grp">
              <span className="lt" style={{ ["--i" as string]: 4 } as React.CSSProperties}>
                <i>H</i>
              </span>
              <span className="lt" style={{ ["--i" as string]: 5 } as React.CSSProperties}>
                <i>E</i>
              </span>
              <span className="lt" style={{ ["--i" as string]: 6 } as React.CSSProperties}>
                <i>R</i>
              </span>
              <span className="lt" style={{ ["--i" as string]: 7 } as React.CSSProperties}>
                <i>E</i>
              </span>
            </span>
          </h1>
          <Reveal as="p" className="hero-sub" delay={0.5}>
            From <em className="strike">nowhere</em> to{" "}
            <em className="acc">now here</em> — we design, engineer and ship the
            websites, apps and cloud systems ambitious companies run on.
          </Reveal>
          <Reveal className="hero-cta" delay={0.68}>
            <Magnetic className="btn btn-lime" href="/contact">
              Start a project <Ic d={D.ne} />
            </Magnetic>
            <Magnetic className="btn btn-ghost" href="/work">
              See the work <Ic d={D.r} />
            </Magnetic>
          </Reveal>
        </div>
        <Reveal className="hero-foot" delay={0.85}>
          <span>
            8 CASE STUDIES · <b>WEB · MOBILE · AI · CLOUD</b>
          </span>
          <span className="hf-scroll">
            SCROLL
            <Ic d={D.dn} />
          </span>
        </Reveal>
      </div>
    </div>
  );
}
