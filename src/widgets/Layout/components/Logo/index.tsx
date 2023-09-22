import React from 'react';
import { useRouter } from 'next/router';
import styles from './Logo.module.scss';

import { Icon } from '@/shared/ui';

type LogoProps = {
  width?: number;
  height?: number;
};

export const Logo = ({ width = 42, height = 48 }: LogoProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.logoContainer} onClick={handleClick}>
      <Icon name="logoAlt" width={width} height={height} />
      <h1 className={styles.logo}>SOURCEMAP.PRO</h1>
    </div>
  );
};
