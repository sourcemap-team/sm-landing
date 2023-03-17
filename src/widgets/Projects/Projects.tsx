import styles from './Projects.module.scss';

import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { Tag } from '@/shared/ui';

import { PROJECTS_LIST } from './data';

type Additions = {
  title: {
    [key: string]: string;
  };
  linkText: {
    [key: string]: string;
  };
};

const PROJECTS_ADDITIONS: Additions = {
  title: {
    en: 'Projects',
    ru: 'Проекты',
  },
  linkText: {
    en: 'View result',
    ru: 'Смотреть',
  },
};
export const Projects = () => {
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <div className={styles.container} id="projects">
      <h2 className={cx('title', styles.title)}>
        {PROJECTS_ADDITIONS.title[lang]}
      </h2>
      {PROJECTS_LIST.map((project) => (
        <div key={project.title} className={styles.project}>
          <div className={styles.left}>
            <div className={styles.info}>
              <div className={styles.infoText}>
                <div className={styles.tablet}>
                  <h3>{project.title}</h3>
                  <h3 className={styles.dateTablet}>{project.date}</h3>
                </div>
                <p className={styles.text}>{project.about[lang]}</p>
                <a className={styles.link} href={project.link} target="_blank">
                  <button className={styles.button}>
                    <img src="/icons/arrow-right.svg" alt="Arrow Right" />
                  </button>
                  <span className={styles.linkText}>
                    {PROJECTS_ADDITIONS.linkText[lang]}
                  </span>
                </a>
              </div>
              <h3 className={styles.date}>{project.date}</h3>
            </div>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <img src={project.img} alt={project.title} className={styles.img} />
        </div>
      ))}
    </div>
  );
};
