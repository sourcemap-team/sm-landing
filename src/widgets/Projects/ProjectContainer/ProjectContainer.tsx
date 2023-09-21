import React from 'react';
import styles from './ProjectContainer.module.scss';

import { ProjectPropsType } from './types';
import ProjectSolutionBlock from './ProjectSolutionBlock/ProjectSolutionBlock';
import ProjectGoalBlock from './ProjectGoalBlock/ProjectGoalBlock';
import ProjectTopBlock from './ProjectTopBlock/ProjectTopBlock';

const ProjectContainer = ({ project }: ProjectPropsType) => {
  return (
    <div className={styles.mainContainer}>
      <ProjectTopBlock project={project} />
      <ProjectGoalBlock project={project} />
      <ProjectSolutionBlock project={project} />
    </div>
  );
};
export default ProjectContainer;
