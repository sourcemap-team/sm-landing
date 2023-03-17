import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '@/app/styles/globals.scss';
import { Layout } from '@/widgets';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
