import styles from './Skills.module.scss';

import React from 'react';
import cx from 'classnames';

import { Tag } from '@/shared/ui';
import { useRouter } from 'next/router';

import { SKILLS } from './skills';

const localeTitleMap = new Map([
  ['en', 'What we do'],
  ['ru', 'Что делаем'],
]);

export const Skills = () => {
  const { locale } = useRouter();
  const lang: string = locale || 'en';

  return (
    <>
      <h2 className="title">{localeTitleMap.get(lang)}</h2>

      <ul className={styles.skills}>
        {SKILLS.map((s) => (
          <li
            key={s.title}
            className={cx(styles.skill, s.primary && styles.primary)}
          >
            <h3 className="stack-title">{s.title}</h3>
            <ul className={styles.tags}>
              {s.tags.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
