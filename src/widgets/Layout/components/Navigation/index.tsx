'use client';

import styles from './Navigation.module.scss';

import React, { MouseEvent } from 'react';
import { useLocale, useOffsetScroll, useScrollSpy } from '@/shared/hooks';

import { MENU_IDS, MENU_ITEMS } from '@/widgets/Layout/menu';

const HEADER_HEIGHT = 76;

export const Navigation = () => {
  const activeId = useScrollSpy(MENU_IDS, 100);
  const handleLinkClick = useOffsetScroll(HEADER_HEIGHT);
  const locale = useLocale();

  return (
    <ul className={styles.menu}>
      {MENU_ITEMS.map((item) => (
        <li key={item.name[locale]}>
          <a
            href={item.href}
            onClick={(e: MouseEvent<HTMLElement>) =>
              handleLinkClick(e, item.id)
            }
            aria-current={item.id === activeId}
            className={styles.link}
          >
            {item.name[locale]}
          </a>
        </li>
      ))}
    </ul>
  );
};
