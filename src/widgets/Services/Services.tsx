'use client';

import styles from './Services.module.scss';

import React from 'react';
import cx from "classnames";
import { useRouter } from 'next/router';

import { Collapse } from '@/shared/ui';
import { SERVICES_ITEMS } from '@/widgets/Services/data';

const SERVICES_TITLE: { [key: string]: string } = {
  en: 'Services',
  ru: 'Услуги',
};
export const Services = () => {
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <div className={styles.container} id="services">
      <h2 className={cx('title', styles.title)}>{SERVICES_TITLE[lang]}</h2>
      {SERVICES_ITEMS.map((service) => (
        <Collapse
          key={service.title[lang]}
          title={service.title[lang]}
          icon={service.icon}
        >
          <p>{service.content[lang]}</p>
        </Collapse>
      ))}
    </div>
  );
};
