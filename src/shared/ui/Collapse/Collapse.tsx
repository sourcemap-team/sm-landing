'use client';

import styles from './Collapse.module.scss';

import React, { ReactNode, useState } from 'react';
import cx from 'classnames';

type CollapseProps = {
  children: ReactNode;
  title: string;
  icon: string;
};
export const Collapse = ({ title, children, icon }: CollapseProps) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.container}>
      <div className={styles.info} onClick={handleCollapse}>
        <div className={styles.left}>
          <img
            className={cx(styles.icon, {
              [styles.iconCollapsed]: !isCollapsed,
            })}
            src={icon}
            alt={title}
          />
          <h2
            className={cx(styles.title, {
              [styles.titleCollapsed]: !isCollapsed,
            })}
          >
            {title}
          </h2>
        </div>
        <button className={styles.button}>
          <span className={styles.iconBtnContainer}>
            <img
              className={cx(styles.iconBtn, {
                [styles.iconBtnCollapsed]: !isCollapsed,
              })}
              src="/icons/arrow-down.svg"
              alt="Collapse"
            />
          </span>
        </button>
      </div>
      <div className={cx(styles.content, { [styles.collapsed]: !isCollapsed })}>
        {children}
      </div>
    </div>
  );
};
