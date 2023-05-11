import styles from './Projects.module.scss';

import React from 'react';
import cx from 'classnames';

import { useLocale } from '@/shared/hooks';

import { ProjectCard } from './components';
import { PROJECTS } from './data';

const localeTitleMap = new Map([
  ['en', 'Projects'],
  ['ru', 'Проекты'],
]);

export const Projects = () => {
  const locale = useLocale();

  return (
    <div className={styles.container} id="projects">
      <h2 className={cx('title', styles.title)}>
        {localeTitleMap.get(locale)}
      </h2>
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} className={styles.project} />
      ))}
    </div>
  );
};
