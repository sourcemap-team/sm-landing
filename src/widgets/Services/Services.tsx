'use client';

import styles from './Services.module.scss';

import React from 'react';
import cx from "classnames";
import { useRouter } from 'next/router';

import { Collapse } from '@/shared/ui';
import { SERVICES_ITEMS, ServiceItemTitle } from '@/widgets/Services/data';

const SERVICES_TITLE: ServiceItemTitle = {
  en: 'Services',
  ru: 'Услуги',
};


type locale = 'en' | 'ru'
export const Services = () => {
  const router = useRouter();
  const lang = router.locale || 'en';

  return (
    <div className={styles.container} id="services">
      <h2 className={cx('title', styles.title)}>{SERVICES_TITLE[lang as locale]}</h2>
      {SERVICES_ITEMS.map((service) => (
        <Collapse
          key={service.title[lang as locale]}
          title={service.title[lang as locale]}
          icon={service.icon}
        >
          <p>{service.content[lang as locale]}</p>
        </Collapse>
      ))}
    </div>
  );
};
