import styles from './Hero.module.scss';

import React from 'react';

import { useLocale } from '@/shared/hooks';

import { Icon } from '@/shared/ui/Icon';

const localeDescMap = new Map([
  [
    'en',
    <>
      We create <span className={styles.dedicated}>reliable</span> apps using a
      <span className={styles.dedicated}>&nbsp;modern</span> stack
    </>,
  ],
  [
    'ru',
    <>
      Создаём <span className={styles.dedicated}>надёжные&nbsp;</span>
      приложения, используя&nbsp;
      <span className={styles.dedicated}>передовые</span> технологии
    </>,
  ],
]);

export const Hero = () => {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <Icon name="logo" width={49} height={56} />
        <span className={styles.title}>SOURCEMAP.PRO</span>
      </h1>
      <p className={styles.info}>{localeDescMap.get(locale)}</p>
    </div>
  );
};
