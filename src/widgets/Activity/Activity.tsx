import styles from './Activity.module.scss';

import React from 'react';

import { useLocale } from '@/shared/hooks';
import { Tag } from '@/shared/ui';

import { ACTIVITIES_LIST, ACTIVITY_INFO } from './data';

export const Activity = () => {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <p className={styles.text}>{ACTIVITY_INFO[locale]}</p>
      <div className={styles.activities}>
        {ACTIVITIES_LIST.map((activity) => (
          <div key={activity.title[locale]} className={styles.activity}>
            <a href={activity.link} target="_blank">
              <div className={styles.article}>
                <img
                  className={styles.img}
                  src={activity.img[locale]}
                  alt={activity.title[locale]}
                />
                <Tag primary className={styles.tag}>
                  {activity.tag[locale]}
                </Tag>
              </div>
              <h3 className={styles.title}>{activity.title[locale]}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
