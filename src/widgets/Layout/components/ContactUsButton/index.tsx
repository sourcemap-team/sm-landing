import styles from './ContactUsButton.module.scss';
import React from 'react';

import { Icon } from '@/shared/ui';
import { ContactUsBtnLocaleMap } from '@/widgets/Layout/menu';
import { useLocale } from '@/shared/hooks';

export const ContactUsButton = () => {
  const locale = useLocale();
  return (
    <a
      href="https://t.me/sourcemap_pro"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.actionLink}
    >
      <Icon name="telegramLarge" width={24} height={24} />
      <span className={styles.actionText}>
        {ContactUsBtnLocaleMap.get(locale)}
      </span>
    </a>
  );
};
