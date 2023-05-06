import React from 'react';

type Link = {
  icon: string;
  href: string;
  name: string;
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
      en: 'Roman Babanov',
      ru: 'Роман Бабанов',
    },
    role: {
      en: 'CEO',
      ru: 'CEO',
    },
    img: '/images/contacts/Roman.png',
    links: [
      {
        icon: '/icons/socials/linkedin.svg',
        href: 'https://www.linkedin.com/in/roman-babanov/',
        name: 'linkedin',
      },
      {
        icon: '/icons/socials/telegram.svg',
        href: 'https://t.me/c_o_o_n',
        name: 'telegram',
      },
      {
        icon: '/icons/socials/facebook.svg',
        href: 'https://www.facebook.com/profile.php?id=100016170887764',
        name: 'facebook',
      },
    ],
  },
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
        icon: '/icons/socials/linkedin.svg',
        href: 'https://www.linkedin.com/in/ogurechnikovsl/',
        name: 'linkedin',
      },
      {
        icon: '/icons/socials/telegram.svg',
        href: 'https://t.me/ogurechnikov',
        name: 'telegram',
      },
      {
        icon: '/icons/socials/facebook.svg',
        href: 'https://www.facebook.com/s.ogurechnikov',
        name: 'facebook',
      },
    ],
  },
];

export const LINKS: Link[] = [
  {
    icon: '/icons/socials/linkedin.svg',
    href: 'https://www.linkedin.com/company/sourcemap-pro/',
    name: 'linkedin',
  },
  {
    icon: '/icons/socials/github.svg',
    href: 'https://github.com/sourcemap-team',
    name: 'github',
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
