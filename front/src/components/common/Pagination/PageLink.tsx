import { HTMLProps } from 'react';
import styles from "./PageLink.module.scss"

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  active,
  disabled,
  children,
  ...otherProps
}: Props) {;

  if (disabled) {
    return <span className={styles.paginationButtonDisabled}>{children}</span>;
  }

  return (
    <a
      className={active ? styles.paginationButtonActive : styles.paginationButton}
      {...otherProps}
    >
      {children}
    </a>
  );
}
