import styles from './Pricing.module.scss';

import React from 'react';
import cx from 'classnames';

export const Pricing = () => {
  return (
    <div className={styles.container}>
      <h2 className="title" style={{ color: '#FFF' }}>
        Pricing
      </h2>
      <div className={styles.info}>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textShort)}>
            We work according to Time & Material, so the client pays for the
            actual time spent by our specialists on the project.
          </p>
          <span className={cx(styles.minPrice, styles.light)}>$50/hour</span>
          <p className={cx(styles.time, styles.light)}>
            Up to 100 hours per month
          </p>
        </div>
        <div className={styles.block}>
          <p className={cx(styles.light, styles.textLong)}>
            We work in sprints lasting 1-2 weeks, adapt flexibly to the
            client&apos;s processes, provide transparent reports on the work
            done, and always guarantee the result.
          </p>
          <span className={styles.price}>$45/hour</span>
          <p className={cx(styles.time, styles.light)}>
            Over 100 hours per month
          </p>
        </div>
      </div>
    </div>
  );
};
