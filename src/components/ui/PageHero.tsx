import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  label: string;
  title: string;
  lead?: string;
};

export function PageHero({ label, title, lead }: PageHeroProps) {
  return (
    <div className="phero">
      <div className="wrap">
        <Reveal className="sec-label">{label}</Reveal>
        <Reveal variant="clip" className="phero-title">
          <span>{title}</span>
        </Reveal>
        {lead ? (
          <Reveal as="p" className="phero-lead" delay={0.1}>
            {lead}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
