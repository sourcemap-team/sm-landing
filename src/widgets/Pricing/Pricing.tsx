import styles from './Pricing.module.scss';

import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { PRICING } from './text';

export const Pricing = () => {
  const { locale } = useRouter();
  const lang: string = locale || 'en';

  return (
    <div className={styles.container} id="pricing">
      <h2 className={cx('title', styles.title)} id="price">
        {PRICING.title[lang]}
      </h2>

      <div className={styles.info}>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textShort, styles.text)}>
            {PRICING.lowPrice.text[lang]}
          </p>
          <div className={styles.basicWidth}>
            <p className={cx(styles.minPrice, styles.light)}>
              {PRICING.lowPrice.price[lang]}
            </p>
            <p className={cx(styles.time, styles.light)}>
              {PRICING.lowPrice.time[lang]}
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textLong, styles.text)}>
            {PRICING.fullPrice.text[lang]}
          </p>
          <div className={styles.tabletWidth}>
            <p className={cx(styles.minPrice, styles.light)}>
              {PRICING.lowPrice.price[lang]}
            </p>
            <p className={cx(styles.time, styles.light)}>
              {PRICING.lowPrice.time[lang]}
            </p>
          </div>
          <p className={styles.price}>{PRICING.fullPrice.price[lang]}</p>
          <p className={cx(styles.time, styles.light, styles.timeFullPrice)}>
            {PRICING.fullPrice.time[lang]}
          </p>
        </div>
      </div>
    </div>
  );
};
