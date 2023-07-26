import styles from './MobileMenu.module.scss';
import cx from 'classnames';

import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { SocialLinks } from '@/features';

import { useLocale, useScrollSpy } from '@/shared/hooks';
import { Button, Icon } from '@/shared/ui';

import { MENU_ITEMS, MENU_IDS } from '../../menu';
import { ChangeLanguageButton } from '../ChangeLanguageButton';
import { LINKS, buttonLocaleMap } from './data';

type MobileMenuProps = {
  open?: boolean;
  onSetMobileMenuState: Dispatch<SetStateAction<{ open: boolean }>>;
};

export const MobileMenu: FC<MobileMenuProps> = ({
  open = false,
  onSetMobileMenuState,
}) => {
  const activeId = useScrollSpy(MENU_IDS, 100);
  const locale = useLocale();

  const closeMobileMenu = () => {
    onSetMobileMenuState((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.setAttribute('style', 'overflow: hidden;');
    }
    return () => {
      body.setAttribute('style', 'overflow: auto;');
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className={cx(styles.mobileMenu, open && styles.open)}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {MENU_ITEMS.map((item) => (
            <li key={item.id} className={styles.item}>
              <a
                href={item.href}
                aria-current={item.id === activeId}
                onClick={closeMobileMenu}
                className={styles.anchor}
              >
                {item.name[locale]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SocialLinks links={LINKS} className={styles.links} />

      <a
        href="mailto:hello@sourcemap.pro"
        target="_blank"
        rel="noreferrer"
        className={styles.mail}
      >
        hello@sourcemap.pro
      </a>

      <div className={styles.actions}>
        <a href="#contact" className={styles.contactLink}>
          <Button onClick={closeMobileMenu} className={styles.btn}>
            <Icon name="telegramLarge" width={24} height={24} />
            {buttonLocaleMap.get(locale)}
          </Button>
        </a>

        <ChangeLanguageButton withBorder className={styles.localeBtn} />
      </div>
    </div>
  );
};
