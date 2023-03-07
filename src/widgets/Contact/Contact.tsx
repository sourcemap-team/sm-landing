import styles from './Contact.module.scss';

import React from 'react';

const CONTACTS_LIST = [
  {
    name: 'Roman Babanov',
    role: 'CEO',
    img: '/images/contacts/Roman.jpg',
    links: [
      {
        icon: '/icons/socials/linkedin.svg',
        link: 'https://www.linkedin.com/in/roman-babanov/',
        name: 'linkedin',
      },
      {
        icon: '/icons/socials/telegram.svg',
        link: 'https://t.me/c_o_o_n',
        name: 'telegram',
      },
      {
        icon: '/icons/socials/facebook.svg',
        link: 'https://www.facebook.com/profile.php?id=100016170887764',
        name: 'facebook',
      },
    ],
  },
  {
    name: 'Sergey Ogurechnikov',
    role: 'Business Developer',
    img: '/images/contacts/Sergey.jpg',
    links: [
      {
        icon: '/icons/socials/linkedin.svg',
        link: 'https://www.linkedin.com/in/ogurechnikovsl/',
        name: 'linkedin',
      },
      {
        icon: '/icons/socials/telegram.svg',
        link: 'https://t.me/ogurechnikov',
        name: 'telegram',
      },
      {
        icon: '/icons/socials/facebook.svg',
        link: 'https://www.facebook.com/s.ogurechnikov',
        name: 'facebook',
      },
    ],
  },
];

const LINKS = [
  {
    icon: '/icons/socials/linkedin.svg',
    link: 'https://www.linkedin.com/company/sourcemap-pro/',
    name: 'linkedin',
  },
  {
    icon: '/icons/socials/github.svg',
    link: 'https://github.com/sourcemap-team',
    name: 'github',
  },
];

export const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className="title">Contact Us</h2>
      <p className={styles.text}>
        If you want to discuss the project or just chat, write to us at
        <a href="mailto:hello@sourcemap.pro"> hello@sourcemap.pro</a> or on the
        social network
      </p>
      <div className={styles.contacts}>
        {CONTACTS_LIST.map((contact) => (
          <div key={contact.name} className={styles.contact}>
            <img
              className={styles.profile}
              src={contact.img}
              alt={contact.name}
            />
            <h3>{contact.name}</h3>
            <p className={styles.role}>{contact.role}</p>
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
        <a className={styles.link} href="mailto:hello@sourcemap.pro">
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
