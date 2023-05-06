import styles from './Project.module.scss';

import React, { FC } from 'react';

import { Tag } from '@/shared/ui';

import type { Project } from '../../data';
import { useRouter } from 'next/router';

const textMap = new Map([
  ['en', 'View result'],
  ['ru', 'Смотреть'],
]);

export type ProjectCardProps = {
  project: Project;
  className?: string;
};

export const ProjectCard: FC<ProjectCardProps> = ({ project, className }) => {
  const { locale } = useRouter();
  const { title } = project;
  const lang: string = locale || 'en';

  return (
    <article className={className}>
      <div className={styles.wrap}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            {title} <span className={styles.date}>{project.date}</span>
          </h3>
          <p className={styles.desc}>{project.about[lang]}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <button className={styles.btn}>
              <img src="/icons/arrow-right.svg" alt="Arrow Right" />
            </button>
            <span className={styles.linkText}>{textMap.get(lang)}</span>
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
