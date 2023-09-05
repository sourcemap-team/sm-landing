'use client';

import styles from './Services.module.scss';

import React from 'react';
import cx from 'classnames';

import { SERVICES_ITEMS, ServiceItemTitle } from '@/widgets/Services/data';

import { useLocale } from '@/shared/hooks';
import { Collapse } from '@/shared/ui';

const SERVICES_TITLE: ServiceItemTitle = {
  en: 'We develop',
  ru: 'Мы разрабатываем',
};

export const Services = () => {
  const locale = useLocale() as keyof ServiceItemTitle;

  return (
    <div className={styles.container} id="services">
      <h2 className={cx('title', styles.title)}>{SERVICES_TITLE[locale]}</h2>
      {SERVICES_ITEMS.map((service) => (
        <Collapse
          key={service.title[locale]}
          title={service.title[locale]}
          icon={service.icon}
        >
          <p>{service.content[locale]}</p>
        </Collapse>
      ))}
    </div>
  );
};
