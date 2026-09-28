type MarkProps = {
  className?: string;
};

export function Mark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="8.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M14 1.5v5.4M14 21.1v5.4M1.5 14h5.4M21.1 14h5.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 1.5v5.4" stroke="var(--lime)" strokeWidth="1.8" />
      <circle cx="14" cy="14" r="2.4" fill="currentColor" />
    </svg>
  );
}
