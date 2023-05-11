'use client';

import styles from './Layout.module.scss';

import React, { PropsWithChildren } from 'react';
import cx from 'classnames';

import { useScrollSpy, useLocale } from '@/shared/hooks';

import { ChangeLanguageButton } from './components';
import { MENU_ITEMS } from './menu';

const MENU_IDS = ['services', 'projects', 'skills', 'pricing'];

const CONTACT_US: Record<string, string> = {
  ru: 'Напиши нам',
  en: 'Contact Us',
};

export const Layout = ({ children }: PropsWithChildren) => {
  const activeId = useScrollSpy(MENU_IDS, 100);
  const locale = useLocale();

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
          <span
            className={cx(styles.actionText, {
              [styles.light]: activeId === 'pricing',
            })}
          >
            {CONTACT_US[locale]}
          </span>
          <button className={styles.button}>
            <img src="/icons/arrow-right.svg" alt="Arrow Right" />
          </button>
        </a>
      </div>
    </div>
  );
};
