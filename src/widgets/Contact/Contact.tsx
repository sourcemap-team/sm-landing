import styles from './Contact.module.scss';

import React from 'react';

export const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className="title">Contact Us</h2>
      <p className={styles.text}>
        If you want to discuss the project or just chat, write to us at
        hello@sourcemap.pro or on the social network
      </p>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <img
            className={styles.profile}
            src="/images/Roman.jpg"
            alt="Roman Babanov"
          />
          <h3>Roman Babanov</h3>
          <p className={styles.role}>CEO</p>
          <div className={styles.links}>
            <a href="">
              <div className={styles.socialLink}>
                <img src="/icons/socials/linkedin.svg" alt="linkedin" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <a className={styles.link}>hello@sourcemap.pro</a>
        <div className={styles.links}>
          <a href="">
            <div className={styles.socialLink}>
              <img src="/icons/socials/linkedin.svg" alt="linkedin" />
            </div>
          </a>
        </div>
      </div>
      <p className={styles.copy}>© SourceMap </p>
    </div>
  );
};
