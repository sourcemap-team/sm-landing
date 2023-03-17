import styles from './HomePage.module.scss';

import React from 'react';
import Head from 'next/head';

import {
  Activity,
  Contact,
  Hero,
  Pricing,
  Projects,
  Services,
  Skills,
} from '@/widgets';

const Home = () => {
  return (
    <>
      <Head>
        <title>SourceMap</title>
        <meta property="og:title" content="SourceMap" key="title" />
        <meta
          property="og:description"
          content="Outsource developers team"
          key="title"
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
