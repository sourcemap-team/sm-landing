import styles from './ChangeLanguageButton.module.scss';

import React, { FC, MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { Icon } from '@/shared/ui';

export type ChangeLanguageButtonProps = {
  className?: string;
  withBorder?: boolean;
};

export const ChangeLanguageButton: FC<ChangeLanguageButtonProps> = ({
  withBorder = false,
  className,
}) => {
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
      const localeToSet =
        currentLocale === defaultLocale ? 'ru' : defaultLocale || 'en';
      let newPath: string | null = null;

      if (pathname.includes('/projects/')) {
        newPath = `/projects/${query.project}`;
      }

      push({ pathname: newPath || pathname, query }, newPath || pathname, {
        locale: localeToSet,
        scroll: false,
      });
    }
  };

  return (
    <button
      type="button"
      onClick={changeLanguage}
      className={cx(styles.btn, withBorder && styles.bordered, className)}
    >
      <Icon name="planet" width={24} height={24} />
      {currentLocale}
    </button>
  );
};
