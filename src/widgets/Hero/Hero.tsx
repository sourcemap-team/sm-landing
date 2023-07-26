import styles from './Hero.module.scss';

import React from 'react';

import { useLocale } from '@/shared/hooks';

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
      <p className={styles.info}>{localeDescMap.get(locale)}</p>
    </div>
  );
};
