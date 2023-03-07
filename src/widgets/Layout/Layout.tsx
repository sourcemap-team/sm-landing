import styles from './Layout.module.scss';

import React, { ReactNode } from 'react';

const MENU_ITEMS = [
  { name: 'Services', link: '#services' },
  { name: 'Projects', link: '#projects' },
  { name: 'What we do', link: '#skills' },
  { name: 'Pricing', link: '#pricing' },
];

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <li key={item.name}>
            <a className={styles.link} href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {children}
      <div className={styles.action}>
        <a href="" className={styles.actionLink}>
          <span className={styles.actionText}>Contact Us</span>
          <button className={styles.button}>
            <img src="/icons/arrow-right.svg" alt="Arrow Right" />
          </button>
        </a>
      </div>
    </div>
  );
};
