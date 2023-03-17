type Project = {
  title: string;
  about: {
    [key: string]: string;
  };
  link: string;
  date: string;
  img: string;
  tags: string[];
};

export const PROJECTS_LIST: Project[] = [
  {
    title: 'FlowMapp',
    about: {
      en: 'Frontend development of UX tool for web designers',
      ru: 'Разработка интерфейса UX-инструмента для веб-дизайнеров',
    },
    link: 'https://app.flowmapp.com/login',
    date: '2023',
    img: '/images/projects/flowmapp.png',
    tags: ['React', 'Webpack', 'CSS/SCSS', 'TypeScript'],
  },
  {
    title: 'Connect',
    about: {
      en: 'Frontend and backend development for Cryptocurrency exchanger',
      ru: 'Разработка интерфейса и бэкенда для криптовалютного обменника',
    },
    link: 'https://connect.app/',
    date: '2023',
    img: '/images/projects/connect.png',
    tags: ['Kotlin', 'PostgreSQL', 'PWA', 'React', 'TypeScript'],
  },
  {
    title: 'ShortCast',
    about: {
      en: 'The complex development of all product components: Frontend, Backend, Devops, Chrome Extension',
      ru: 'Комплексная разработка всех компонентов продукта: Frontend, Backend, Devops, Chrome расширение',
    },
    link: 'https://app.shortcast.io/signin',
    date: '2022',
    img: '/images/projects/shortcast.png',
    tags: ['React', 'Next JS', 'Node JS', 'Strapi'],
  },
  {
    title: 'Feexle',
    about: {
      en: 'Frontend and backend development of finance tracking app',
      ru: 'Разработка интерфейса и бэкенда приложения для отслеживания финансов',
    },
    link: 'https://app.feexle.com/sign-in',
    date: '2022',
    img: '/images/projects/feexle.png',
    tags: ['Kotlin', 'Spring Boot', 'React', 'TypeScript'],
  },
  {
    title: 'Invest Allocator',
    about: {
      en: 'Development of Chrome Extension and frontend of web app for a fintech startup',
      ru: 'Разработка Chrome расширения и интерфейса веб-приложения для финтех-стартапа',
    },
    link: 'https://app.investallocator.com/account/sign-in',
    date: '2021',
    img: '/images/projects/ia.png',
    tags: ['React', 'Chrome API', 'CSS', 'HTML'],
  },
];
