'use client';

import styles from './Layout.module.scss';

import React, { ReactNode } from 'react';
import cx from 'classnames';
import { useScrollSpy } from '@/shared/hooks';
import { useRouter } from 'next/router';
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
      ru: 'Что мы делаем',
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

const CONTACT_US: { [key: string]: string } = {
  ru: 'Напиши нам',
  en: 'Contact Us',
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const activeId = useScrollSpy(MENU_IDS, 100);
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <li key={item.name[lang]}>
            <a
              className={cx(
                styles.link,
                {
                  [styles.active]: item.id === activeId,
                },
                {
                  [styles.light]: activeId === 'pricing',
                }
              )}
              href={item.link}
            >
              {item.name[lang]}
            </a>
          </li>
        ))}

        <ChangeLanguageButton className={styles.langButton} />
      </ul>
      <div className={styles.content}>{children}</div>
      <div className={styles.action}>
        <img className={styles.logo} src="/icons/logo-m.svg" alt="Sourcemap" />
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
