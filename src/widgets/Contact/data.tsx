import React from 'react';

type Link = {
  id: number;
  href: string;
  icon: {
    name: string;
    width: number;
    height: number;
  };
};

type Contact = {
  name: Record<string, string>;
  role: Record<string, string>;
  img: string;
  links: Link[];
};

export const CONTACTS: Contact[] = [
  {
    name: {
      en: 'Sergey Ogurechnikov',
      ru: 'Сергей Огуречников',
    },
    role: {
      en: 'Business Developer',
      ru: 'Business Developer',
    },
    img: '/images/contacts/Sergey.png',
    links: [
      {
        id: 1,
        icon: {
          name: 'linkedin',
          width: 20,
          height: 21,
        },
        href: 'https://www.linkedin.com/in/ogurechnikovsl/',
      },
      {
        id: 2,
        icon: {
          name: 'telegram',
          width: 22,
          height: 20,
        },
        href: 'https://t.me/ogurechnikov',
      },
      {
        id: 3,
        icon: {
          name: 'facebook',
          width: 20,
          height: 20,
        },
        href: 'https://www.facebook.com/s.ogurechnikov',
      },
    ],
  },
];

type Info = {
  title: Record<string, React.ReactNode>;
  text: Record<string, React.ReactNode>;
};

export const CONTACT_INFO: Info = {
  title: {
    ru: 'Связаться с нами',
    en: 'Contact Us',
  },
  text: {
    ru: (
      <>
        Если вы хотите обсудить проект или просто пообщаться, напишите нам по
        адресу&nbsp;
        <a href="mailto:hello@sourcemap.pro" target="_blank">
          hello@sourcemap.pro
        </a>
        &nbsp;или в соцсетях
      </>
    ),
    en: (
      <>
        If you want to discuss the project or just chat, write to us at&nbsp;
        <a href="mailto:hello@sourcemap.pro" target="_blank">
          hello@sourcemap.pro
        </a>
        &nbsp;or on the social network
      </>
    ),
  },
};
