import styles from './HomePage.module.scss';

import React from 'react';

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
