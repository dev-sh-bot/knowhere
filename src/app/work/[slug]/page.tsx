import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Ic } from "@/components/ui/Ic";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_DETAILS } from "@/lib/case-details";
import { CASES } from "@/lib/data";
import { D } from "@/lib/icons";

const DETAILED = CASES.filter((c) => c.slug && CASE_DETAILS[c.slug]);

const pad = (n: number) => String(n + 1).padStart(2, "0");

const cols = (n: number, max = 3) =>
  ({
    "--cols": n % max === 0 ? max : n % 2 === 0 && n < max * 2 ? 2 : max,
  }) as CSSProperties;

export const dynamicParams = false;

export function generateStaticParams() {
  return DETAILED.map((c) => ({ slug: c.slug! }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = DETAILED.find((x) => x.slug === slug);
  const d = CASE_DETAILS[slug];
  if (!c || !d) return {};
  return { title: `${c.title} — Case Study`, description: d.intro };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const i = DETAILED.findIndex((x) => x.slug === slug);
  const c = DETAILED[i];
  const d = CASE_DETAILS[slug];
  if (!c || !d) notFound();
  const next = DETAILED[(i + 1) % DETAILED.length];

  return (
    <>
      <section className="phero cs-hero">
        <div className="wrap">
          <Link className="cs-back" href="/work">
            <Ic d={D.l} /> All work
          </Link>
          <div className="cs-hero-grid">
            <div>
              <Reveal className="sec-label">
                Case file {c.no} — {c.sector}
              </Reveal>
              <Reveal variant="clip" className="phero-title cs-title">
                <span>{c.title}</span>
              </Reveal>
              <Reveal as="p" className="cs-headline" delay={0.05}>
                {d.headline}
              </Reveal>
              <Reveal as="p" className="phero-lead" delay={0.1}>
                {d.intro}
              </Reveal>
              <Reveal className="tags cs-tags" delay={0.15}>
                {c.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </Reveal>
            </div>
            <Reveal className="cs-hero-shot" delay={0.1}>
              <Image
                src={d.hero.src}
                alt={d.hero.alt}
                width={d.hero.w}
                height={d.hero.h}
                sizes="(max-width: 900px) 90vw, 40vw"
                priority
              />
            </Reveal>
          </div>
          <dl className="cs-facts">
            {d.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="sec bg-ink cs-outs-sec">
        <div className="wrap cs-outs">
          {c.outs.map(([n, l]) => (
            <Reveal key={l}>
              <b>{n}</b>
              <span>{l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec bg-paper">
        <div className="wrap">
          <div className="cs-split">
            <div>
              <Reveal className="sec-label">(01) Overview</Reveal>
              <Reveal as="h2" className="cs-h2">
                {d.overview.title}
              </Reveal>
            </div>
            <div className="cs-body">
              {d.overview.body.map((p) => (
                <Reveal as="p" key={p}>
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
          <div className="cs-cards">
            {d.overview.cards.map(([k, v], n) => (
              <Reveal key={k} className="cs-card" delay={n * 0.05}>
                <h5>{k}</h5>
                <p>{v}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="h3" className="cs-h3">
            User journey
          </Reveal>
          <ol className="cs-journey">
            {d.journey.map((s, n) => (
              <Reveal as="li" key={s.t} delay={n * 0.05}>
                <i>{pad(n)}</i>
                <b>{s.t}</b>
                <span>{s.d}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec bg-ink">
        <div className="wrap">
          <Reveal className="sec-label">(02) The challenge</Reveal>
          <Reveal as="h2" className="cs-h2">
            {d.challenges.title}
          </Reveal>
          {d.challenges.lead ? (
            <Reveal as="p" className="lead cs-lead">
              {d.challenges.lead}
            </Reveal>
          ) : null}
          <div className="cs-grid" style={cols(d.challenges.items.length)}>
            {d.challenges.items.map((it, n) => (
              <Reveal key={it.t} className="cs-cell" delay={(n % 3) * 0.05}>
                <i>{pad(n)}</i>
                <h4>{it.t}</h4>
                <p>{it.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-paper">
        <div className="wrap">
          <div className="cs-split">
            <div>
              <Reveal className="sec-label">(03) The solution</Reveal>
              <Reveal as="h2" className="cs-h2">
                {d.solution.title}
              </Reveal>
            </div>
            <div className="cs-body">
              {d.solution.body.map((p) => (
                <Reveal as="p" key={p}>
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="cs-arch">
            <span className="cs-arch-k">System architecture</span>
            <div className="cs-arch-core">
              <b>{d.solution.center.t}</b>
              <span>{d.solution.center.d}</span>
            </div>
            <div
              className="cs-arch-nodes"
              style={cols(d.solution.nodes.length, d.solution.nodes.length % 4 === 0 ? 4 : 3)}
            >
              {d.solution.nodes.map((nd) => (
                <div key={nd.t}>
                  <b>{nd.t}</b>
                  <span>{nd.d}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec bg-ink">
        <div className="wrap">
          <Reveal className="sec-label">(04) Key features</Reveal>
          <Reveal variant="clip" className="sec-title">
            <span>
              WHAT WE <em>BUILT</em>
            </span>
          </Reveal>
          <div className="cs-features">
            {d.features.map((f, n) => (
              <article
                key={f.t}
                className={`cs-feat${f.wide ? " wide" : ""}`}
              >
                <Reveal className="cs-feat-txt">
                  <i>Feature {pad(n)}</i>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                  <ul>
                    {f.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal
                  className={`cs-shot${f.wide ? "" : " tall"}`}
                  delay={0.1}
                >
                  <Image
                    src={f.shot.src}
                    alt={f.shot.alt}
                    width={f.shot.w}
                    height={f.shot.h}
                    sizes={f.wide ? "100vw" : "(max-width: 900px) 90vw, 45vw"}
                  />
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-paper">
        <div className="wrap">
          <Reveal className="sec-label">(05) Technology</Reveal>
          <Reveal as="h2" className="cs-h2">
            {d.process ? "Technology stack & process" : "Technology stack"}
          </Reveal>
          <Reveal className="tags cs-stack">
            {d.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </Reveal>
          {d.process ? (
            <>
              <Reveal as="h3" className="cs-h3">
                {d.process.title}
              </Reveal>
              <ol className="cs-process">
                {d.process.steps.map((s, n) => (
                  <Reveal as="li" key={s.t} delay={n * 0.05}>
                    <i>{pad(n)}</i>
                    <b>{s.t}</b>
                    <p>{s.d}</p>
                  </Reveal>
                ))}
              </ol>
            </>
          ) : null}
        </div>
      </section>

      {d.results ? (
        <section className="sec bg-ink">
          <div className="wrap">
            <Reveal className="sec-label">(06) Results</Reveal>
            <Reveal as="h2" className="cs-h2">
              {d.results.title}
            </Reveal>
            <div className="cs-grid" style={cols(d.results.items.length)}>
              {d.results.items.map((it, n) => (
                <Reveal key={it.t} className="cs-cell" delay={(n % 3) * 0.05}>
                  <i>{pad(n)}</i>
                  <h4>{it.t}</h4>
                  <p>{it.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {d.roadmap ? (
        <section className="sec bg-ink">
          <div className="wrap">
            <Reveal className="sec-label">(06) MVP status & roadmap</Reveal>
            <Reveal as="h2" className="cs-h2">
              {d.roadmap.title}
            </Reveal>
            <Reveal as="p" className="lead cs-lead">
              {d.roadmap.lead}
            </Reveal>
            <div className="cs-road">
              <Reveal className="cs-road-col">
                <h5>Current MVP progress</h5>
                <ul>
                  {d.roadmap.progress.map(([k, v]) => (
                    <li key={k}>
                      <span>{k}</span>
                      <em data-s={v === "MVP" || v === "Core UI built" ? "mvp" : "done"}>
                        {v}
                      </em>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="cs-road-col" delay={0.1}>
                <h5>Next roadmap</h5>
                <ol>
                  {d.roadmap.next.map((x, n) => (
                    <li key={x}>
                      <i>{pad(n)}</i>
                      <span>{x}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      <section className="sec bg-paper cs-next">
        <div className="wrap row-between">
          <div>
            <span className="sec-label">Next case file</span>
            <Link className="cs-next-title" href={`/work/${next.slug}`}>
              {next.title} <Ic d={D.ne} />
            </Link>
            <p className="cs-next-blurb">{next.blurb}</p>
          </div>
          <Link className="btn btn-ink" href="/contact">
            Build something like this <Ic d={D.ne} />
          </Link>
        </div>
      </section>
    </>
  );
}
