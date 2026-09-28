import { Clock } from "@/components/ui/Clock";
import { Ic } from "@/components/ui/Ic";
import { Reveal } from "@/components/ui/Reveal";
import { D } from "@/lib/icons";

export function ContactChannels() {
  return (
    <Reveal className="c-channels">
      <a className="ch" href="mailto:Info@knowheresystems.com">
        <span className="ch-k">EMAIL</span>
        <span className="ch-v">Info@knowheresystems.com</span>
        <Ic d={D.ne} className="ch-a" />
      </a>
      <a
        className="ch"
        href="https://wa.me/923133054378"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="ch-k">PHONE / WHATSAPP</span>
        <span className="ch-v">+92 313 3054378</span>
        <Ic d={D.ne} className="ch-a" />
      </a>
      <div className="ch">
        <span className="ch-k">OFFICE</span>
        <span className="ch-v">
          House 279/5-6, Al-Waheed Colony, Hyderabad 71000, Sindh, Pakistan
        </span>
      </div>
      <div className="ch">
        <span className="ch-k">HOURS</span>
        <span className="ch-v">
          Mon–Sat, 09:00–18:00 PKT — now <Clock /> PKT
        </span>
      </div>
    </Reveal>
  );
}
