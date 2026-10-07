import { Clock } from "@/components/ui/Clock";
import { Ic } from "@/components/ui/Ic";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/data";
import { D } from "@/lib/icons";

export function ContactChannels() {
  return (
    <Reveal className="c-channels">
      <a className="ch" href={`mailto:${CONTACT.email}`}>
        <span className="ch-k">EMAIL</span>
        <span className="ch-v">{CONTACT.email}</span>
        <Ic d={D.ne} className="ch-a" />
      </a>
      {/* <a
        className="ch"
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="ch-k">PHONE / WHATSAPP</span>
        <span className="ch-v">{CONTACT.phone}</span>
        <Ic d={D.ne} className="ch-a" />
      </a> */}
      <div className="ch">
        <span className="ch-k">HOURS</span>
        <span className="ch-v">
          {CONTACT.hours} — now <Clock />
        </span>
      </div>
      <div className="ch">
        <span className="ch-k">REPLY</span>
        <span className="ch-v">Share the project details and discuss clear next steps.</span>
      </div>
    </Reveal>
  );
}
