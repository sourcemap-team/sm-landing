import styles from './Pricing.module.scss';

import React from 'react';
import cx from 'classnames';

import { useLocale } from '@/shared/hooks';

import { PRICING } from './text';

export const Pricing = () => {
  const locale = useLocale();

  return (
    <div className={styles.container} id="pricing">
      <h2 className={cx('title', styles.title)} id="price">
        {PRICING.title[locale]}
      </h2>

      <div className={styles.info}>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textShort, styles.text)}>
            {PRICING.lowPrice.text[locale]}
          </p>
          <div className={styles.basicWidth}>
            <p className={cx(styles.minPrice, styles.light)}>
              {PRICING.lowPrice.price[locale]}
            </p>
            <p className={cx(styles.time, styles.light)}>
              {PRICING.lowPrice.time[locale]}
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textLong, styles.text)}>
            {PRICING.fullPrice.text[locale]}
          </p>
          <div className={styles.tabletWidth}>
            <p className={cx(styles.minPrice, styles.light)}>
              {PRICING.lowPrice.price[locale]}
            </p>
            <p className={cx(styles.time, styles.light)}>
              {PRICING.lowPrice.time[locale]}
            </p>
          </div>
          <p className={styles.price}>{PRICING.fullPrice.price[locale]}</p>
          <p className={cx(styles.time, styles.light, styles.timeFullPrice)}>
            {PRICING.fullPrice.time[locale]}
          </p>
        </div>
      </div>
    </div>
  );
};
