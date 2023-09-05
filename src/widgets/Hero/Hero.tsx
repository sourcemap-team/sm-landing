import styles from './Hero.module.scss';

import React from 'react';

import { useLocale } from '@/shared/hooks';

const localeDescMap = new Map([
  [
    'en',
    <>
      Culture of&nbsp;<span className={styles.dedicated}>quality</span>
      <span className={styles.dedicated}>development</span>
    </>,
  ],
  [
    'ru',
    <>
      Культура <span className={styles.dedicated}>качественной&nbsp;</span>
      <span className={styles.dedicated}>разработки</span>
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
