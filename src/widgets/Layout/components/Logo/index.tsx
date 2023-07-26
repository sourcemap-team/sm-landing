import styles from './Logo.module.scss';
import React from 'react';

import { Icon } from '@/shared/ui';

type LogoProps = {
  width?: number;
  height?: number;
};

export const Logo = ({ width = 42, height = 48 }: LogoProps) => {
  return (
    <div className={styles.logoContainer}>
      <Icon name="logoAlt" width={width} height={height} />
      <h1 className={styles.logo}>SOURCEMAP.PRO</h1>
    </div>
  );
};
