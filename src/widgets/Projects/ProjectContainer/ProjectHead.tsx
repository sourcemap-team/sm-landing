import React from 'react';
import Head from 'next/head';

import { useLocale } from '@/shared/hooks';
import { ProjectPropsType } from './types';

const ProjectHead = ({ project }: ProjectPropsType) => {
  const locale = useLocale();

  const META: {
    [key: string]: Record<string, string>;
  } = {
    title: {
      ru: `${project.title}`,
      en: `${project.title}`,
    },
    description: {
      en: `${project.description.en}`,
      ru: `${project.description.ru}`,
    },
  };

  return (
    <>
      <Head>
        <title>{META.title[locale]}</title>
        <meta property="og:title" content={META.title[locale]} key="title" />
        <meta
          property="og:description"
          content={META.description[locale]}
          key="description"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://sourcemap.pro/images/share/share-image.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title[locale]} />
        <meta name="twitter:site" content="@sourcemap.pro" />
        <meta
          name="twitter:image"
          content="https://sourcemap.pro/images/share/share-image.jpeg"
        />
        <meta name="twitter:image:alt" content={META.title[locale]} />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

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
    </>
  );
};

export default ProjectHead;
