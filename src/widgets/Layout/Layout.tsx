'use client';

import styles from './Layout.module.scss';

import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { useScrollSpy } from '@/shared/hooks';

import { ChangeLanguageButton } from './components';

type Menu = {
  name: Record<string, string>;
  link: string;
  id: string;
};

const MENU_ITEMS: Menu[] = [
  {
    name: {
      en: 'Services',
      ru: 'Услуги',
    },
    link: '#services',
    id: 'services',
  },
  {
    name: {
      en: 'Projects',
      ru: 'Проекты',
    },
    link: '#projects',
    id: 'projects',
  },
  {
    name: {
      en: 'What we do',
      ru: 'Что делаем',
    },
    link: '#skills',
    id: 'skills',
  },
  {
    name: {
      en: 'Pricing',
      ru: 'Cтоимость',
    },
    link: '#price',
    id: 'pricing',
  },
];

const MENU_IDS = ['services', 'projects', 'skills', 'pricing'];

const CONTACT_US: Record<string, string> = {
  ru: 'Напиши нам',
  en: 'Contact Us',
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const { locale } = useRouter();
  const lang: string = locale || 'en';

  const activeId = useScrollSpy(MENU_IDS, 100);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {MENU_ITEMS.map((item) => (
            <li key={item.name[lang]}>
              <a
                href={item.link}
                aria-current={item.id === activeId}
                className={cx(styles.link)}
              >
                {item.name[lang]}
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
            {CONTACT_US[lang]}
          </span>
          <button className={styles.button}>
            <img src="/icons/arrow-right.svg" alt="Arrow Right" />
          </button>
        </a>
      </div>
    </div>
  );
};
