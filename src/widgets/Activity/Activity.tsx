import styles from './Activity.module.scss';

import React from 'react';
import { useRouter } from 'next/router';

import { Tag } from '@/shared/ui';

import { ACTIVITIES_LIST, ACTIVITY_INFO } from './data';

export const Activity = () => {
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <div className={styles.container}>
      <p className={styles.text}>{ACTIVITY_INFO[lang]}</p>
      <div className={styles.activities}>
        {ACTIVITIES_LIST.map((activity) => (
          <div key={activity.title[lang]} className={styles.activity}>
            <a href={activity.link} target="_blank">
              <div className={styles.article}>
                <img
                  className={styles.img}
                  src={activity.img[lang]}
                  alt={activity.title[lang]}
                />
                <Tag primary className={styles.tag}>
                  {activity.tag[lang]}
                </Tag>
              </div>
              <h3 className={styles.title}>{activity.title[lang]}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
