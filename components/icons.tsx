type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        d="M5 13l4 4 10-10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="16.75" cy="7.25" r="1" fill="currentColor" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
