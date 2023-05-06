import styles from './Projects.module.scss';

import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { ProjectCard } from './components';

import { PROJECTS } from './data';

const localeTitleMap = new Map([
  ['en', 'Projects'],
  ['ru', 'Проекты'],
]);

export const Projects = () => {
  const { locale } = useRouter();
  const lang: string = locale || 'en';

  return (
    <div className={styles.container} id="projects">
      <h2 className={cx('title', styles.title)}>{localeTitleMap.get(lang)}</h2>
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} className={styles.project} />
      ))}
    </div>
  );
};
