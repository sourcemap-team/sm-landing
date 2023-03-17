import styles from './Tag.module.scss';

import React, { ReactNode } from 'react';
import cx from 'classnames';

type TagProps = {
  primary?: boolean;
  className?: string;
  children: ReactNode;
};
export const Tag = ({ children, primary = false, className }: TagProps) => {
  return (
    <span
      className={cx(
        styles.tag,
        className,
        {
          [styles.primary]: primary,
        },
        'tag'
      )}
    >
      {children}
    </span>
  );
};
