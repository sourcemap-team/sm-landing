import React from 'react';
import Head from 'next/head';
import { Contact, Footer } from '@/widgets';
import ProjectComp from '@/widgets/Projects/ProjectComp/ProjectComp';
import { useRouter } from 'next/router';
import { PROJECTS } from '@/widgets/Projects/data';
import { useLocale } from '@/shared/hooks';

const ProjectPage = () => {
  const locale = useLocale();
  const titleProject = useRouter().query.project;

  const filteredProjects = PROJECTS.filter(
    (project) => project.title === titleProject
  );

  const existProject = filteredProjects[0];

  console.log(existProject);

  const META: {
    [key: string]: Record<string, string>;
  } = {
    title: {
      ru: `${existProject?.title}`,
      en: `${existProject?.title}`,
    },
    description: {
      en: ``,
      ru: `${existProject?.title} - project of the development team "@sourcemap.pro"`,
    },
  };

  return (
    <>
      <Head>
        <title>{META.title[locale]}</title>
        <meta property="og:title" content={META.title[locale]} key="title" />
        <meta
          property="og:description"
          content={META.description[locale]}
          key="description"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://sourcemap.pro/images/share/share-image.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title[locale]} />
        <meta name="twitter:site" content="@sourcemap.pro" />
        <meta
          name="twitter:image"
          content="https://sourcemap.pro/images/share/share-image.jpeg"
        />
        <meta name="twitter:image:alt" content={META.title[locale]} />
      </Head>
      <ProjectComp project={existProject} />
      <Contact />
      <Footer />
    </>
  );
};

export default ProjectPage;
