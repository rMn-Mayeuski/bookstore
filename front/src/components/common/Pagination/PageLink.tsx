import { HTMLProps } from 'react';
import styles from "./PageLink.module.scss"

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {;

  if (disabled) {
    return <span className={styles.paginationButton}>{children}</span>;
  }

  return (
    <a
      className={styles.paginationButton}
      aria-current={active ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
