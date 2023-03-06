import styles from './page.module.scss';

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
    <main className={styles.main}>
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Activity />
      <Pricing />
      <Contact />
    </main>
  );
};

export default Home;
