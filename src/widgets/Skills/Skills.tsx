import styles from './Skills.module.scss';

import React from 'react';
import cx from 'classnames';

import { Tag } from '@/shared/ui';

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h2 className="title">What we do</h2>
      <div className={styles.skills}>
        <div className={cx(styles.skill, { [styles.primary]: true })}>
          <h4 className="stack-title">Frontend</h4>
          <div className={styles.tags}>
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Vue</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};
