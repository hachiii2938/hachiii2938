import type { ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function MolecularPrimary({ children, className, ...rest }: BaseProps) {
  return (
    <button type="button" className={['mol-btn mol-btn--primary', className].filter(Boolean).join(' ')} {...rest}>
      <span className="mol-btn__gloss" aria-hidden />
      <span className="mol-btn__label">{children}</span>
    </button>
  );
}

export function MolecularGhost({ children, className, ...rest }: BaseProps) {
  return (
    <button type="button" className={['mol-btn mol-btn--ghost', className].filter(Boolean).join(' ')} {...rest}>
      <span className="mol-btn__mesh" aria-hidden />
      <span className="mol-btn__label">{children}</span>
    </button>
  );
}

export function MolecularOrb({
  children,
  className,
  accent = false,
  ...rest
}: BaseProps & { accent?: boolean }) {
  return (
    <button
      type="button"
      className={['mol-orb', accent ? 'mol-orb--accent' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="mol-orb__sphere" aria-hidden />
      <span className="mol-orb__label">{children}</span>
    </button>
  );
}

export function MolecularToggle({
  pressed,
  children,
  className,
  ...rest
}: Omit<BaseProps, 'children'> & { pressed: boolean; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={['mol-toggle', pressed ? 'is-on' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="mol-toggle__track" aria-hidden>
        <span className="mol-toggle__bead" />
      </span>
      <span className="mol-toggle__label">{children}</span>
    </button>
  );
}
