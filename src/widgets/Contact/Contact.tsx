import styles from './Contact.module.scss';

import React from 'react';
import { useRouter } from 'next/router';

import { CONTACT_INFO, CONTACTS_LIST, LINKS } from './data';

export const Contact = () => {
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <div className={styles.container} id="contact">
      <h2 className="title">{CONTACT_INFO.title[lang]}</h2>
      <p className={styles.text}>{CONTACT_INFO.text[lang]}</p>
      <div className={styles.contacts}>
        {CONTACTS_LIST.map((contact) => (
          <div key={contact.name[lang]} className={styles.contact}>
            <img
              className={styles.profile}
              src={contact.img}
              alt={contact.name[lang]}
            />
            <h3>{contact.name[lang]}</h3>
            <p className={styles.role}>{contact.role[lang]}</p>
            <div className={styles.links}>
              {contact.links.map(({ link, icon, name }) => (
                <a key={name} href={link} target="_blank">
                  <div className={styles.socialLink}>
                    <img src={icon} alt={name} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.info}>
        <a
          className={styles.link}
          href="mailto:hello@sourcemap.pro"
          target="_blank"
        >
          hello@sourcemap.pro
        </a>
        <div className={styles.links}>
          {LINKS.map(({ link, name, icon }) => (
            <a href={link} key={name} target="_blank">
              <div className={styles.socialLink}>
                <img src={icon} alt={name} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <p className={styles.copy}>© SourceMap </p>
    </div>
  );
};
