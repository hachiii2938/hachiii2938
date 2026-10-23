import { useId, type ButtonHTMLAttributes, type ReactNode } from 'react';

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const POD_PATH =
  'M12 48C8 34 14 16 28 10c16-7 34 2 36 20 2 16-8 30-22 34-12 4-24-2-30-16Z';

export function InkPrimary({ children, className, ...rest }: BaseProps) {
  const uid = useId().replace(/:/g, '');
  const bleedId = `inkBleed-${uid}`;
  const stippleId = `inkStipple-${uid}`;

  return (
    <button type="button" className={['ink-btn ink-btn--primary', className].filter(Boolean).join(' ')} {...rest}>
      <svg className="ink-btn__shape" viewBox="0 0 72 64" aria-hidden preserveAspectRatio="none">
        <defs>
          <filter id={bleedId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" />
          </filter>
          <pattern id={stippleId} width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="currentColor" opacity="0.35" />
            <circle cx="3" cy="2.5" r="0.45" fill="currentColor" opacity="0.25" />
          </pattern>
        </defs>
        <path className="ink-btn__pod" d={POD_PATH} filter={`url(#${bleedId})`} />
        <path className="ink-btn__stipple" d={POD_PATH} fill={`url(#${stippleId})`} />
      </svg>
      <span className="ink-btn__stem" aria-hidden />
      <span className="ink-btn__label">{children}</span>
    </button>
  );
}

export function InkGhost({ children, className, ...rest }: BaseProps) {
  return (
    <button type="button" className={['ink-btn ink-btn--ghost', className].filter(Boolean).join(' ')} {...rest}>
      <svg className="ink-btn__outline" viewBox="0 0 72 64" aria-hidden preserveAspectRatio="none">
        <path d={POD_PATH} fill="none" strokeWidth="1.5" />
      </svg>
      <span className="ink-btn__label">{children}</span>
    </button>
  );
}

export function InkPod({
  children,
  className,
  lit = false,
  label,
  ...rest
}: Omit<BaseProps, 'children'> & { children: ReactNode; lit?: boolean; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={lit}
      className={['ink-pod', lit ? 'is-lit' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="ink-pod__bloom" aria-hidden />
      <span className="ink-pod__body" aria-hidden />
      <span className="ink-pod__glyph">{children}</span>
    </button>
  );
}

export function InkBranch({
  items,
}: {
  items: { id: string; label: string; lit?: boolean; onClick?: () => void }[];
}) {
  return (
    <div className="ink-branch" role="group" aria-label="Ink branch actions">
      <svg className="ink-branch__vine" viewBox="0 0 40 160" aria-hidden>
        <path
          d="M20 8 C18 40 28 55 18 80 C10 100 26 120 20 152"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <ul className="ink-branch__list">
        {items.map((item, index) => (
          <li key={item.id} style={{ ['--i' as string]: index }}>
            <InkPod lit={item.lit} label={item.label} onClick={item.onClick}>
              {item.label.slice(0, 1)}
            </InkPod>
            <span className="ink-branch__caption">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
