import styles from './MobileMenu.module.scss';

import { FC } from 'react';

import { SocialLinks } from '@/features';

import { useLocale, useScrollSpy } from '@/shared/hooks';
import { Button } from '@/shared/ui';

import { MENU_ITEMS, MENU_IDS } from '../../menu';
import { ChangeLanguageButton } from '../ChangeLanguageButton';
import { LINKS, buttonLocaleMap } from './data';

interface MobileMenuProps {
  visible: boolean;
}

export const MobileMenu: FC<MobileMenuProps> = (props) => {
  const activeId = useScrollSpy(MENU_IDS, 100);
  const locale = useLocale();
  const { visible = false } = props;

  if (!visible) {
    return null;
  }

  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {MENU_ITEMS.map((item) => (
            <li key={item.id} className={styles.item}>
              <a
                href={item.href}
                aria-current={item.id === activeId}
                className={styles.anchor}
              >
                {item.name[locale]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SocialLinks links={LINKS} />

      <a
        href="mailto:hello@sourcemap.pro"
        target="_blank"
        rel="noreferrer"
        className={styles.mail}
      >
        hello@sourcemap.pro
      </a>

      <div className={styles.actions}>
        <a href="#contact">
          <Button className={styles.btn}>{buttonLocaleMap.get(locale)}</Button>
        </a>

        <ChangeLanguageButton />
      </div>
    </div>
  );
};
