import React from 'react';

import styles from './ Hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>
      <p className={styles.info}>
        We create <span className={styles.dedicated}>reliable</span> apps using
        a <span className={styles.dedicated}>modern</span> stack
      </p>
    </div>
  );
};
