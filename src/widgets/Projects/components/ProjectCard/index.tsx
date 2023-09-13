import styles from './Project.module.scss';

import React, { FC } from 'react';

import { Tag } from '@/shared/ui';

import { useLocale } from '@/shared/hooks';

import { Project } from '../../data';

const textMap = new Map([
  ['en', 'View result'],
  ['ru', 'Смотреть'],
]);

export type ProjectCardProps = {
  project: Project;
  className?: string;
};

export const ProjectCard: FC<ProjectCardProps> = ({ project, className }) => {
  const locale = useLocale();
  const { title } = project;

  return (
    <article className={className}>
      <div className={styles.wrap}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            {title} <span className={styles.date}>{project.date}</span>
          </h3>
          <p className={styles.desc}>{project.about[locale]}</p>
          <a
            href={`/projects/${title}`}
            // target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <button className={styles.btn}>
              <img src="/icons/arrow-right.svg" alt="Arrow Right" />
            </button>
            <span className={styles.linkText}>{textMap.get(locale)}</span>
          </a>
          <ul className={styles.tags}>
            {project.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imgWrap}>
          <img src={project.img} alt={title} className={styles.img} />
        </div>
      </div>
    </article>
  );
};
