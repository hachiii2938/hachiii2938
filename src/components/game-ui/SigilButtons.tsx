import type { ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

type Tone = 'lavender' | 'cyan';

export function SigilPrimary({
  children,
  className,
  tone = 'cyan',
  ...rest
}: BaseProps & { tone?: Tone }) {
  return (
    <button
      type="button"
      className={['sigil-btn sigil-btn--primary', `sigil-btn--${tone}`, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <svg className="sigil-btn__mark" viewBox="0 0 64 64" aria-hidden>
        <path
          className="sigil-btn__body"
          d="M18 10c14-6 32 2 34 18 2 14-10 28-24 28S8 42 10 28C12 18 14 12 18 10Z"
        />
        <circle className="sigil-btn__core" cx="28" cy="30" r="10" />
        <circle className="sigil-btn__dot" cx="28" cy="30" r="3.5" />
        <path
          className="sigil-btn__tail"
          d="M40 46c10 4 16 12 14 20"
          fill="none"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle className="sigil-btn__tail-end" cx="54" cy="66" r="0" />
      </svg>
      <span className="sigil-btn__label">{children}</span>
      <span className="sigil-btn__spiral" aria-hidden />
    </button>
  );
}

export function SigilIcon({
  children,
  className,
  tone = 'lavender',
  label,
  ...rest
}: Omit<BaseProps, 'children'> & { children: ReactNode; tone?: Tone; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={['sigil-icon', `sigil-icon--${tone}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="sigil-icon__ring" aria-hidden />
      <span className="sigil-icon__nest" aria-hidden />
      <span className="sigil-icon__glyph">{children}</span>
    </button>
  );
}

export function SigilChip({
  children,
  className,
  tone = 'lavender',
  active = false,
  ...rest
}: BaseProps & { tone?: Tone; active?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={['sigil-chip', `sigil-chip--${tone}`, active ? 'is-active' : '', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <span className="sigil-chip__node" aria-hidden />
      <span className="sigil-chip__label">{children}</span>
    </button>
  );
}
