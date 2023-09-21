import React from 'react';
import Image from 'next/image';
import { ProjectPropsType } from '../types';
import { useLocale } from '@/shared/hooks';
import styles from './ProjectGoalBlock.module.scss';

const ProjectGoalBlock = ({ project }: ProjectPropsType) => {
  const goalTitle = new Map([
    ['en', 'Project goal'],
    ['ru', 'Цель проекта'],
  ]);

  const IMAGE_WIDTH = 1200;
  const IMAGE_HEIGHT = 735;

  const locale = useLocale();

  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.title}>{goalTitle.get(locale)}</h1>
        </div>

        <div className={styles.content}>
          <p>{project?.projectGoal[locale]}</p>
        </div>

        <div className={styles.imageBlock}>
          <Image
            src={project.images.goalImage}
            className={styles.image}
            alt={project.title}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectGoalBlock;
