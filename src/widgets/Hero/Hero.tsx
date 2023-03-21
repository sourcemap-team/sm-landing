import React, { ReactNode } from 'react';

import styles from './Hero.module.scss';
import { useRouter } from 'next/router';

const HERO_INFO: { [key: string]: ReactNode } = {
  en: (
    <>
      We create <span className={styles.dedicated}>reliable</span> apps using a
      <span className={styles.dedicated}>&nbsp;modern</span> stack
    </>
  ),
  ru: (
    <>
      Создаём <span className={styles.dedicated}>надёжные&nbsp;</span>
      приложения, используя&nbsp;
      <span className={styles.dedicated}>передовые</span> технологии
    </>
  ),
};

export const Hero = () => {
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>
      <p className={styles.info}>{HERO_INFO[lang]}</p>
    </div>
  );
};
