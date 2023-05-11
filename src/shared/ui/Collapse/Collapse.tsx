'use client';

import styles from './Collapse.module.scss';

import React, { FC, PropsWithChildren, useState } from 'react';
import cx from 'classnames';

import { useDelayUnmount } from '@/shared/hooks';

type CollapseProps = PropsWithChildren & {
  title: string;
  icon: string;
};

export const Collapse: FC<CollapseProps> = ({ title, children, icon }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const shouldShowContent = useDelayUnmount(!isCollapsed, 250);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cx(styles.cardWrapper, { [styles.expandCard]: !isCollapsed })}
      onClick={handleCollapse}
    >
      <div className={styles.row}>
        <div className={styles.titleWrapper}>
          {icon && (
            <img
              className={cx(styles.icon, {
                [styles.iconCollapsed]: !isCollapsed,
              })}
              src={icon}
              alt={title}
            />
          )}
          <h3 className={styles.title}>{title}</h3>
        </div>
        <button className={styles.button}>
          <img
            className={cx(styles.iconBtn, {
              [styles.iconBtnCollapsed]: !isCollapsed,
            })}
            src="/icons/arrow-down.svg"
            alt="Collapse"
          />
        </button>
      </div>
      {shouldShowContent && (
        <div
          className={cx(styles.contentWrapper, {
            [styles.showContent]: !isCollapsed,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};
