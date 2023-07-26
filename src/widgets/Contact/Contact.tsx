import styles from './Contact.module.scss';

import React from 'react';

import { useLocale } from '@/shared/hooks';

import { SocialLinks } from '@/features';

import { CONTACT_INFO, CONTACTS } from './data';

export const Contact = () => {
  const locale = useLocale();

  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.title}>{CONTACT_INFO.title[locale]}</h2>
      <div className={styles.wrapper}>
        {CONTACTS.map((c) => (
          <div key={c.name[locale]} className={styles.contact}>
            <div className={styles.info}>
              <img
                className={styles.profile}
                src={c.img}
                alt={c.name[locale]}
              />
              <div className={styles.contactDescription}>
                <h3 className={styles.name}>{c.name[locale]}</h3>
                <p className={styles.role}>{c.role[locale]}</p>
              </div>
            </div>

            <SocialLinks links={c.links} />
          </div>
        ))}
      </div>
    </div>
  );
};
