import styles from './Tag.module.scss';

import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';

type TagProps = PropsWithChildren & {
  primary?: boolean;
  className?: string;
};

export const Tag: FC<TagProps> = ({ children, primary = false, className }) => {
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
