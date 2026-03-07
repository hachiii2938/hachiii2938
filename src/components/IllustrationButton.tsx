import type { ReactNode, ButtonHTMLAttributes } from 'react';

type IllustrationButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function IllustrationButton({ children, className, ...rest }: IllustrationButtonProps) {
  return (
    <button
      className={['illust-button', className].filter(Boolean).join(' ')}
      type="button"
      {...rest}
    >
      <span className="illust-button-border" />
      <span className="illust-button-inner">{children}</span>
    </button>
  );
}

