import styles from './Tag.module.scss';

import React, { ReactNode } from 'react';

export const Tag = ({ children }: { children: ReactNode }) => {
  return <span className={styles.tag}>{children}</span>;
};
