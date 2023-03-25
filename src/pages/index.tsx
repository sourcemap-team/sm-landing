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
        <meta property="og:image" itemProp="image" content="/images/share/sourcemap-social-share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title[lang]} />
        <meta name="twitter:site" content="@sourcemap.pro" />
        <meta
          name="twitter:image"
          content="/images/share/sourcemap-social-share.jpg"
        />
        <meta name="twitter:image:alt" content={META.title[lang]} />

        <script
          id="yandex-metrika"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(88956706, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <div>
              <img
                src="https://mc.yandex.ru/watch/88956706"
                style={{ position: 'absolute', left: '-9999px' }}
                alt="yandex-metrika-noscript"
              />
            </div>`,
          }}
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
