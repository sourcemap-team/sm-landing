import styles from './Contact.module.scss';

import React from 'react';

import { SocialLinks } from '@/features';

import { useLocale } from '@/shared/hooks';

import { CONTACT_INFO, CONTACTS, LINKS } from './data';

export const Contact = () => {
  const locale = useLocale();

  return (
    <div className={styles.container} id="contact">
      <h2 className="title">{CONTACT_INFO.title[locale]}</h2>
      <p className={styles.text}>{CONTACT_INFO.text[locale]}</p>
      <div className={styles.contacts}>
        {CONTACTS.map((c) => (
          <div key={c.name[locale]} className={styles.contact}>
            <img className={styles.profile} src={c.img} alt={c.name[locale]} />
            <h3>{c.name[locale]}</h3>
            <p className={styles.role}>{c.role[locale]}</p>

            <SocialLinks links={c.links} />
          </div>
        ))}
      </div>
      <div className={styles.info}>
        <a
          className={styles.mail}
          href="mailto:hello@sourcemap.pro"
          target="_blank"
        >
          hello@sourcemap.pro
        </a>

        <SocialLinks links={LINKS} />
      </div>
      <p className={styles.copy}>© Sourcemap </p>
    </div>
  );
};
