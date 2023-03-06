import styles from './Projects.module.scss';

import React from 'react';
import cx from 'classnames';

import { Tag } from '@/shared/ui';

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={cx('title', styles.title)}>Projects</h2>
      <div className={styles.project}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.infoText}>
              <h3>FlowMapp</h3>
              <p className={styles.text}>
                Frontend development of UX tool for web designers
              </p>
              <a className={styles.link} href="">
                <button className={styles.button}>
                  <img src="/icons/arrow-right.svg" alt="Arrow Right" />
                </button>
                <span className={styles.linkText}>View result</span>
              </a>
            </div>
            <h3>2023</h3>
          </div>
          <div className={styles.tags}>
            <Tag>React</Tag>
            <Tag>Webpack</Tag>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/flowmapp.jpg" alt="Flowmapp" />
        </div>
      </div>
    </div>
  );
};
