import './globals.scss';
import './variables.scss';

import React from 'react';
import { Manrope } from '@next/font/google';
import { Layout } from '@/widgets';

export const metadata = {
  title: 'SourceMap',
  description: 'Outsource developers team',
};

const manropeFont = Manrope({
  subsets: ['latin'],
  weight: ['400'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={manropeFont.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
