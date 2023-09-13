import React from 'react';
import Head from 'next/head';
import { Contact, Footer } from '@/widgets';
import ProjectComp from '@/widgets/Projects/ProjectComp/ProjectComp';
import { useRouter } from 'next/router';
import { PROJECTS } from '@/widgets/Projects/data';

const ProjectPage = () => {
  const titleProject = useRouter().query.project;

  const filteredProjects = PROJECTS.filter(
    (project) => project.title === titleProject
  );

  const existProject = filteredProjects[0];

  return (
    <>
      <ProjectComp project={existProject} />
      <Contact />
      <Footer />
    </>
  );
};

export default ProjectPage;
