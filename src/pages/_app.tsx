import '@/app/styles/globals.scss';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import React from 'react';

import { Layout } from '@/widgets';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Sourcemap.pro</title>
        <meta
          property="og:title"
          content="Sourcemap.pro, outsource developer team"
          key="title"
        />
        <meta
          property="og:description"
          content="We create reliable apps using a modern stack"
          key="description"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
