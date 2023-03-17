import styles from './Pricing.module.scss';

import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { PRICING_TEXT } from '@/widgets/Pricing/text';

export const Pricing = () => {
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <div className={styles.container} id="pricing">
      <h2 className={cx('title', styles.title)} id="price">
        {PRICING_TEXT.title[lang]}
      </h2>
      <div className={styles.info}>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textShort, styles.text)}>
            {PRICING_TEXT.lowPrice.text[lang]}
          </p>
          <div className={styles.basicWidth}>
            <span className={cx(styles.minPrice, styles.light)}>
              {PRICING_TEXT.lowPrice.price[lang]}
            </span>
            <p className={cx(styles.time, styles.light)}>
              {PRICING_TEXT.lowPrice.time[lang]}
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textLong, styles.text)}>
            {PRICING_TEXT.fullPrice.text[lang]}
          </p>
          <div className={styles.tabletWidth}>
            <span className={cx(styles.minPrice, styles.light)}>
              {PRICING_TEXT.lowPrice.price[lang]}
            </span>
            <p className={cx(styles.time, styles.light)}>
              {PRICING_TEXT.lowPrice.time[lang]}
            </p>
          </div>
          <span className={styles.price}>
            {PRICING_TEXT.fullPrice.price[lang]}
          </span>
          <p className={cx(styles.time, styles.light)}>
            {PRICING_TEXT.fullPrice.time[lang]}
          </p>
        </div>
      </div>
    </div>
  );
};
