'use client';

import styles from './Layout.module.scss';

import React, { PropsWithChildren, useState } from 'react';

import {
  ChangeLanguageButton,
  ContactUsButton,
  Logo,
  MobileActions,
  MobileMenu,
  Navigation,
} from './components';

export const Layout = ({ children }: PropsWithChildren) => {
  const [mobileMenuState, setMobileMenuState] = useState<{ open: boolean }>({
    open: false,
  });

  const toggleMobileMenuStateOpen = () =>
    setMobileMenuState((prev) => ({ ...prev, open: !prev.open }));

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Logo />
          <Navigation />
        </div>
        <div className={styles.right}>
          <ChangeLanguageButton className={styles.langButton} />
          <ContactUsButton />
        </div>
      </nav>

      <div className={styles.content}>{children}</div>

      <div className={styles.mobileAction}>
        <Logo />
        <MobileActions
          open={mobileMenuState.open}
          onClick={toggleMobileMenuStateOpen}
        />
      </div>

      <MobileMenu
        open={mobileMenuState.open}
        onSetMobileMenuState={setMobileMenuState}
      />
    </div>
  );
};
