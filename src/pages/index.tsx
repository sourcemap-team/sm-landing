import styles from './HomePage.module.scss';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  Activity,
  Contact,
  Hero,
  Pricing,
  Projects,
  Services,
  Skills,
} from '@/widgets';

const META: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  title: {
    ru: 'Sourcemap.pro, команда аутсорс разработчиков',
    en: 'Sourcemap.pro, outsource developer team',
  },
  description: {
    en: 'We create reliable apps using a modern stack',
    ru: 'Создаём надёжные приложения, используя передовые технологии',
  },
};

const Home = () => {
  const router = useRouter();
  const lang: string = router.locale || '';

  return (
    <>
      <Head>
        <title>{META.title[lang]}</title>
        <meta property="og:title" content={META.title[lang]} key="title" />
        <meta
          property="og:description"
          content={META.description[lang]}
          key="description"
        />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Services />
        <Projects />
        <div id="skills">
          <Skills />
          <Activity />
        </div>
        <Pricing />
        <Contact />
      </main>
    </>
  );
};

export default Home;
