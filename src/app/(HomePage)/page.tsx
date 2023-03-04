import styles from './page.module.scss';

import { Hero } from '@/widgets/Hero/Hero';
import { Services } from '@/widgets/Services/Services';

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
    </main>
  );
};

export default Home;
