import React from 'react';
import Image from 'next/image';
import { ProjectPropsType } from '../types';
import { useLocale } from '@/shared/hooks';
import styles from './ProjectSolutionBlock.module.scss';

const ProjectSolutionBlock = ({ project }: ProjectPropsType) => {
  const solutionTitle = new Map([
    ['en', 'Solution'],
    ['ru', 'Решение'],
  ]);

  const IMAGE_WIDTH = 1200;
  const IMAGE_HEIGHT = 735;

  const locale = useLocale();

  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.title}>{solutionTitle.get(locale)}</h1>
        </div>

        <div className={styles.content}>
          <p>{project.solution[locale]}</p>
        </div>

        <div className={styles.imageBlock}>
          <Image
            src={project.images.solutionImage}
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

export default ProjectSolutionBlock;
