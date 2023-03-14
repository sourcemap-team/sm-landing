import styles from './Activity.module.scss';

import React from 'react';
import { Tag } from '@/shared/ui';

const ACTIVITIES_LIST = [
  {
    img: '/images/articles/yandex.png',
    link: 'https://events.yandex.ru/events/meetings/yalovefrontend/?openTalkVideo=1910-4',
    title: 'Lecture for Yandex',
    tag: 'Speech',
  },
  {
    img: '/images/articles/vc.png',
    link: 'https://vc.ru/hr/399864-bystraya-proverka-biznes-gipotez-ili-zachem-startapam-akselerator',
    title: 'Article on VC.RU',
    tag: 'Thought',
  },
  {
    img: '/images/articles/skillbox.png',
    link: 'https://www.youtube.com/watch?v=2TCtQ7wteIk&ab_channel=Skillbox%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD',
    title: 'Workshop for Skillbox',
    tag: 'Speech',
  },
  {
    img: '/images/articles/course.png',
    link: 'https://www.youtube.com/@CoonJS/featured',
    title: 'HTML CSS',
    tag: 'Our courses',
  },
];

export const Activity = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        We actively participate in hackathons, speak at various platforms,
        record courses and share with the community our experience.
      </p>
      <div className={styles.activities}>
        {ACTIVITIES_LIST.map((activity) => (
          <a key={activity.title} href={activity.link} target="_blank">
            <div className={styles.activity}>
              <div className={styles.article}>
                <img
                  className={styles.img}
                  src={activity.img}
                  alt={activity.title}
                />
                <Tag primary className={styles.tag}>
                  {activity.tag}
                </Tag>
              </div>
              <h3 className={styles.title}>{activity.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
