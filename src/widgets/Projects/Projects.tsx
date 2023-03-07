import styles from './Projects.module.scss';

import React from 'react';
import cx from 'classnames';

import { Tag } from '@/shared/ui';

const PROJECTS_LIST = [
  {
    title: 'FlowMapp',
    about: 'Frontend development of UX tool for web designers',
    link: 'https://app.flowmapp.com/login',
    date: '2023',
    img: '/images/projects/flowmapp.jpg',
    tags: ['React', 'Webpack', 'CSS/SCSS', 'TypeScript'],
  },
  {
    title: 'Connect',
    about: 'Frontend and backend development for Cryptocurrency exchanger',
    link: 'https://connect.app/',
    date: '2023',
    img: '/images/projects/connect.jpg',
    tags: ['Kotlin', 'PostgreSQL', 'PWA', 'React', 'TypeScript'],
  },
  {
    title: 'ShortCast',
    about:
      'The complex development of all product components: Frontend, Backend, Devops, Chrome Extension',
    link: 'https://app.shortcast.io/signin',
    date: '2022',
    img: '/images/projects/shortcast.jpg',
    tags: ['React', 'Next JS', 'Node JS', 'Strapi'],
  },
  {
    title: 'Feexle',
    about: 'Frontend and backend development of finance tracking app',
    link: 'https://app.feexle.com/sign-in',
    date: '2022',
    img: '/images/projects/feexle.jpg',
    tags: ['Kotlin', 'Spring Boot', 'React', 'TypeScript'],
  },
  {
    title: 'Invest Allocator',
    about:
      'Development of Chrome Extension and frontend of web app for a fintech startup',
    link: 'https://app.investallocator.com/account/sign-in',
    date: '2021',
    img: '/images/projects/ia.jpg',
    tags: ['React', 'Chrome API', 'CSS', 'HTML'],
  },
];

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={cx('title', styles.title)}>Projects</h2>
      {PROJECTS_LIST.map((project) => (
        <div key={project.title} className={styles.project}>
          <div className={styles.left}>
            <div className={styles.info}>
              <div className={styles.infoText}>
                <div className={styles.tablet}>
                  <h3>{project.title}</h3>
                  <h3 className={styles.dateTablet}>{project.date}</h3>
                </div>
                <p className={styles.text}>{project.about}</p>
                <a className={styles.link} href={project.link} target="_blank">
                  <button className={styles.button}>
                    <img src="/icons/arrow-right.svg" alt="Arrow Right" />
                  </button>
                  <span className={styles.linkText}>View result</span>
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
          <div className={styles.right}>
            <img src={project.img} alt={project.title} className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  );
};
