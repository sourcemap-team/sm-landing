import styles from './ChangeLanguageButton.module.scss';

import React, { FC, MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { Icon } from '@/shared/ui';

export type ChangeLanguageButtonProps = {
  className?: string;
};

export const ChangeLanguageButton: FC<ChangeLanguageButtonProps> = (props) => {
  const {
    locale: currentLocale,
    defaultLocale,
    locales,
    pathname,
    query,
    push,
  } = useRouter();

  const changeLanguage: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (currentLocale && locales?.includes(currentLocale)) {
      const enLocale: string = defaultLocale || 'en';
      push({ pathname, query }, pathname, {
        locale: currentLocale === defaultLocale ? 'ru' : enLocale,
        scroll: false,
      });
    }
  };

  return (
    <button
      type="button"
      onClick={changeLanguage}
      className={cx(styles.btn, props.className)}
    >
      <Icon name="planet" width={24} height={24} />
      {currentLocale}
    </button>
  );
};
