'use client';

import styles from './Layout.module.scss';

import React, { ReactNode } from 'react';

import { useScrollSpy } from '@/shared/hooks';
import cx from 'classnames';

const MENU_ITEMS = [
  { name: 'Services', link: '#services', id: 'services' },
  { name: 'Projects', link: '#projects', id: 'projects' },
  { name: 'What we do', link: '#skills', id: 'skills' },
  { name: 'Pricing', link: '#pricing', id: 'pricing' },
];

const MENU_IDS = ['services', 'projects', 'skills', 'pricing'];

export const Layout = ({ children }: { children: ReactNode }) => {
  const activeId = useScrollSpy(MENU_IDS, 100);

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <li key={item.name}>
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
              {item.name}
            </a>
          </li>
        ))}
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
            Contact Us
          </span>
          <button className={styles.button}>
            <img src="/icons/arrow-right.svg" alt="Arrow Right" />
          </button>
        </a>
      </div>
    </div>
  );
};
