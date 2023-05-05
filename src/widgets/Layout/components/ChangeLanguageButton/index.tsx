import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { Icon } from '@/shared/ui/Icon';

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
    asPath,
    ...router
  } = useRouter();

  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentLocale && locales?.includes(currentLocale)) {
      const enLocale: string = defaultLocale || 'en';
      router.push({ pathname, query }, asPath, {
        locale: currentLocale === defaultLocale ? 'ru' : enLocale,
        scroll: false,
      });
    }
  };

  return (
    <button type="button" onClick={changeLanguage} className={props.className}>
      <Icon name="planet" width={24} height={24} />
      {currentLocale?.toUpperCase()}
    </button>
  );
};
