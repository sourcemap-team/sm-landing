import styles from './Footer.module.scss';

import { SocialLinks } from '@/features';
import { LINKS } from './data';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.widget}>
        <iframe
          width="120"
          height="130"
          src="https://shareables.clutch.co/share/badges/2117207/1268?utm_source=clutch_top_company_badge&utm_medium=image_embed"
          title="Top Clutch Web Developers Armenia 2023"
          style={{ border: 'none' }}
        />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.info}>
          <a
            className={styles.mail}
            href="mailto:hello@sourcemap.pro"
            target="_blank"
          >
            hello@sourcemap.pro
          </a>

          <div className={styles.contacts}>
            <p className={styles.text}>Sourcemap Pro Development LLC</p>
            <p className={styles.text}>Kochar 8, Yerevan, Armenia</p>
          </div>

          <SocialLinks links={LINKS} />
        </div>
        <p className={styles.text}>© Sourcemap 2023 </p>
      </div>
    </div>
  );
};
