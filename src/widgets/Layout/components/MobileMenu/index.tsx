import styles from './MobileMenu.module.scss';

import { FC } from 'react';

import { useLocale } from '@/shared/hooks';

import { MENU_ITEMS } from '../../menu';

interface MobileMenuProps {
  visible: boolean;
}

export const MobileMenu: FC<MobileMenuProps> = (props) => {
  const locale = useLocale();

  const { visible = false } = props;

  if (!visible) {
    return null;
  }

  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {MENU_ITEMS.map((item) => (
          <li key={item.id} className={styles.item}>
            <a href={item.href} className={styles.anchor}>
              {item.name[locale]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
