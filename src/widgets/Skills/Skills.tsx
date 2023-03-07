import styles from './Skills.module.scss';

import React from 'react';
import cx from 'classnames';

import { Tag } from '@/shared/ui';

const SKILLS_LIST = [
  {
    title: 'Frontend',
    primary: true,
    tags: ['Vue', 'TypeScript', 'JavaScript', 'NextJS', 'NuxtJS', 'React'],
  },
  {
    title: 'Backend',
    primary: true,
    tags: [
      'Kotlin',
      'PostgresSQL',
      'Spring Boot',
      'NodeJS',
      'Hibernate',
      'Strapi',
    ],
  },
  {
    title: 'Devops',
    primary: false,
    tags: ['Docker', 'Heroku', 'AWS'],
  },
  {
    title: 'QA',
    primary: false,
    tags: ['Auto-testing', 'Smoke tests', 'Stress Testing'],
  },
];

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h2 className="title">What we do</h2>
      <div className={styles.skills}>
        {SKILLS_LIST.map((skill) => (
          <div
            key={skill.title}
            className={cx(styles.skill, { [styles.primary]: skill.primary })}
          >
            <h4 className="stack-title">{skill.title}</h4>
            <div className={styles.tags}>
              {skill.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
