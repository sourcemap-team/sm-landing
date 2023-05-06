import styles from './Contact.module.scss';

import React from 'react';
import { useRouter } from 'next/router';

import { CONTACT_INFO, CONTACTS, LINKS } from './data';

export const Contact = () => {
  const { locale } = useRouter();
  const lang: string = locale || 'en';

  return (
    <div className={styles.container} id="contact">
      <h2 className="title">{CONTACT_INFO.title[lang]}</h2>
      <p className={styles.text}>{CONTACT_INFO.text[lang]}</p>
      <div className={styles.contacts}>
        {CONTACTS.map((c) => (
          <div key={c.name[lang]} className={styles.contact}>
            <img className={styles.profile} src={c.img} alt={c.name[lang]} />
            <h3>{c.name[lang]}</h3>
            <p className={styles.role}>{c.role[lang]}</p>
            <div className={styles.links}>
              {c.links.map((l) => (
                <a key={l.name} href={l.href} target="_blank" rel="noreferrer">
                  <div className={styles.socialLink}>
                    <img src={l.icon} alt={l.name} />
                  </div>
                </a>
              ))}
            </div>
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
        <div className={styles.links}>
          {LINKS.map((l) => (
            <a href={l.href} key={l.name} target="_blank" rel="noreferrer">
              <div className={styles.socialLink}>
                <img src={l.icon} alt={l.name} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <p className={styles.copy}>© Sourcemap </p>
    </div>
  );
};
