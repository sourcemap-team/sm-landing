import React from 'react';
import FlowMapp from './ProjectsComponents/FlowMapp/FlowMapp';
import Connect from './ProjectsComponents/Connect/Connect';

type Images = {
  title: string;
  logo: string;
  sliderContent: string[];
  goalImage: string;
  solutionImage: string;
};

export type Project = {
  title: string;
  about: Record<string, string>;
  link: string;
  date: string;
  images: Images;
  tags: string[];
  projectGoal: Record<string, string>;
  solution: Record<string, string>;
  comp?: JSX.Element;
};

export const PROJECTS: Project[] = [
  {
    title: 'FlowMapp',
    about: {
      en: 'Frontend development of UX tool for web designers',
      ru: 'Разработка интерфейса UX-инструмента для веб-дизайнеров',
    },
    link: 'https://app.flowmapp.com/login',
    date: '2023',
    images: {
      title: '/images/projects/Flowmapp/FlowMappMain.png',
      logo: '/images/projects/Flowmapp/FlowmappLogo.png',
      sliderContent: [
        '/images/projects/Flowmapp/SliderContent/Slide1.png',
        '/images/projects/Flowmapp/SliderContent/Slide2.png',
      ],
      goalImage: '/images/projects/Flowmapp/FlowMappGoal.png',
      solutionImage: '/images/projects/Flowmapp/FlowMappSolution.png',
    },
    tags: ['React', 'Webpack', 'CSS/SCSS', 'TypeScript'],
    projectGoal: {
      en: `The client come to me with a request to "help deploy the application
            to prod." The current version had numerous bugs, and features were
            taking an exceedingly long time to release, preventing the team from
            going live for about a year.The client come to me with a request to
            "help deploy the application to prod." The current version had
            numerous bugs, and features were taking an exceedingly long time to
            release, preventing the team from going live for about a year.The
            client come to me with a request to "help deploy the application to
            prod." The current version had numerous bugs, and features were
            taking an exceedingly long time to release, preventing the team from
            going live for about a year.`,
      ru: `Ко мне пришел клиент с просьбой «помочь развернуть приложение
		чтобы подтолкнуть." Текущая версия содержала множество ошибок, а были
		релиз занимает очень много времени, что не позволяет команде
		будет жить около года.Клиент обратился ко мне с просьбой
		"помогите развернуть приложение на прод." Текущая версия имела
		многочисленные ошибки, а на разработку функций уходило очень много времени.
		релиз, из-за чего команда не могла выйти в свет примерно на год.
		ко мне пришел клиент с просьбой «помочь развернуть приложение на
		prod." Текущая версия содержала множество ошибок, а функции были
		релиз занимает очень много времени, что не позволяет команде
		будет жить около года.`,
    },
    solution: {
      en: `I was joined the project, conducted an analysis of the existing
		architecture, which turned out to be quite intricate and convoluted.
		However, my initial priority was to get the product deployed, with
		plans to later refactor both the frontend and backend components.
		After successfully releasing the product, I spent the next six
		months with my team rewriting and enhancing the client-side portion,
		preparing for the release of version 3.`,
      ru: `Я присоединился к проекту, провел анализ существующих
		архитектура, которая оказалась достаточно сложной и запутанной.
		Однако моим первоначальным приоритетом было внедрение продукта с
		планирует позднее провести рефакторинг как внешнего, так и внутреннего компонентов.
		После успешного выпуска продукта я потратил следующие шесть
		месяцы, пока моя команда переписывала и улучшала клиентскую часть,
		готовимся к выпуску версии 3.`,
    },
    comp: (
      <>
        <FlowMapp />
      </>
    ),
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
    comp: (
      <>
        <Connect />
      </>
    ),
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
