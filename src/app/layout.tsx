import './globals.css';

import React from 'react';
import { Manrope } from '@next/font/google';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const manropeFont = Manrope({
  subsets: ['latin'],
  weight: ['400'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={manropeFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
