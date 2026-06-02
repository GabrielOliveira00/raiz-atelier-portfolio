type IconProps = {
  className?: string;
};

export function FolhaIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M19 4c-8.5.7-13.2 5.2-14 14 8.8-.8 13.3-5.5 14-14Z" />
      <path d="M7 17c2.2-3.9 5.1-6.8 9-9" />
    </svg>
  );
}

export function SetaIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function BrisaIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M3 9h10c2 0 3-1 3-3s-1-3-3-3" />
      <path d="M3 14h14c2.2 0 4 1.2 4 3.2S19.2 21 17 21" />
      <path d="M3 18h9" />
    </svg>
  );
}

export function SementeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 20c4 0 7-3.1 7-7.1C19 8.3 15.6 4.7 12 4c-3.6.7-7 4.3-7 8.9C5 16.9 8 20 12 20Z" />
      <path d="M12 8v8" />
    </svg>
  );
}
