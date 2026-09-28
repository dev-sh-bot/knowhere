import { Fragment } from "react";
import { MQ_ITEMS } from "@/lib/data";

function MqSet({ hidden }: { hidden: boolean }) {
  return (
    <div className="mq-set" aria-hidden={hidden || undefined}>
      {MQ_ITEMS.map((t, i) => (
        <Fragment key={i}>
          <span className="mq-item">{t}</span>
          <svg
            className="mq-star"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
          </svg>
        </Fragment>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">
        <MqSet hidden={false} />
        <MqSet hidden={true} />
      </div>
    </div>
  );
}
