import type { IconPath } from "@/lib/icons";

type IcProps = {
  d: IconPath | string;
  className?: string;
};

export function Ic({ d, className }: IcProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
