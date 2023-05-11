'use client';

import styles from './Layout.module.scss';

import React, { PropsWithChildren, useState } from 'react';
import cx from 'classnames';

import { useScrollSpy, useLocale } from '@/shared/hooks';
import { AnimatedCross, Button, Icon } from '@/shared/ui';

import { ChangeLanguageButton, MobileMenu } from './components';
import { MENU_ITEMS, MENU_IDS, ContactUsBtnLocaleMap } from './menu';

export const Layout = ({ children }: PropsWithChildren) => {
  const activeId = useScrollSpy(MENU_IDS, 100);
  const locale = useLocale();
  const [mobileMenuState, setMobileMenuState] = useState<{ open: boolean }>({
    open: false,
  });

  const toggleMobileMenuStateOpen = () =>
    setMobileMenuState((prev) => ({ ...prev, open: !prev.open }));

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {MENU_ITEMS.map((item) => (
            <li key={item.name[locale]}>
              <a
                href={item.href}
                aria-current={item.id === activeId}
                className={cx(styles.link)}
              >
                {item.name[locale]}
              </a>
            </li>
          ))}
        </ul>
        <ChangeLanguageButton className={styles.langButton} />
      </nav>

      <div className={styles.content}>{children}</div>
      <div className={styles.action}>
        <div className={styles.logo}>SOURCEMAP.PRO</div>

        <a href="#contact" className={styles.actionLink}>
          <span className={styles.actionText}>
            {ContactUsBtnLocaleMap.get(locale)}
          </span>
          <Button className={styles.button}>
            <Icon name="arrowRight" width={15} height={18} />
          </Button>
        </a>

        <Button
          color={mobileMenuState.open ? 'white' : 'toxic'}
          onClick={toggleMobileMenuStateOpen}
          className={styles.btn}
        >
          <AnimatedCross open={mobileMenuState.open} />
        </Button>
      </div>

      <MobileMenu
        open={mobileMenuState.open}
        onSetMobileMenuState={setMobileMenuState}
      />
    </div>
  );
};
