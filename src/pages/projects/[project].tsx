import React from 'react';
import { GetServerSideProps } from 'next';

import { Contact, Footer } from '@/widgets';
import { PROJECTS } from '@/widgets/Projects/data';

import ProjectContainer from '@/widgets/Projects/ProjectContainer/ProjectContainer';
import ProjectHead from '@/widgets/Projects/ProjectContainer/ProjectHead';
import { ProjectPropsType } from '@/widgets/Projects/ProjectContainer/types';

const ProjectPage: React.FC<ProjectPropsType> = ({ project }) => {
  return (
    <>
      <ProjectHead project={project} />
      <ProjectContainer project={project} />
      <Contact />
      <Footer />
    </>
  );
};

export default ProjectPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { project } = context.query;
  const foundedProject = PROJECTS.find(
    (projectItem) => projectItem.projectSlug === project
  );

  if (!foundedProject) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        project: foundedProject,
      },
    };
  }
};
