import type { CSSProperties } from 'react';

/** The site's mark: a fillet weld symbol as it is drawn on a fabrication
    drawing (leader arrow, reference line, fillet triangle, tail). */
export function Mark() {
  return (
    <svg width="30" height="18" viewBox="0 0 30 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M1.5 16.5 9 7h17" />
      <path d="m1.5 16.5.7-4.3m-.7 4.3 4.2-1.1" />
      <path d="M13 7v6l6-6" />
      <path d="m26 7 3-4m-3 4 3 4" />
    </svg>
  );
}

export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={down ? 'arrow arrow--down' : 'arrow'}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {down ? <path d="M6 1v10m0 0L1.5 6.5M6 11l4.5-4.5" /> : <path d="M2 10 10 2m0 0H3.5M10 2v6.5" />}
    </svg>
  );
}

/** The speed stripe: the five pens side by side. Decorative. */
export function Stripe({ className }: { className?: string }) {
  return (
    <div className={className ? `stripe ${className}` : 'stripe'} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} style={{ '--i': i } as CSSProperties} />
      ))}
    </div>
  );
}
