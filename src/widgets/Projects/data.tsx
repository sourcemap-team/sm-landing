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
    images: {
      title: '/images/projects/Connect/ConnectMain.png',
      logo: '/images/projects/Connect/ConnectLogo.png',
      sliderContent: ['/images/projects/Connect/SliderContent/Slide1.png'],
      goalImage: '/images/projects/Connect/ConnectGoal.png',
      solutionImage: '/images/projects/Connect/ConnectSolution.png',
    },
    tags: ['Kotlin', 'PostgreSQL', 'PWA', 'React', 'TypeScript'],
    projectGoal: {
      en: `The client approached us with a request to develop a mobile application for peer-to-peer (P2P) exchanges.`,
      ru: `Клиент обратился к нам с просьбой разработать мобильное приложение для однорангового (P2P) обмена.`,
    },
    solution: {
      en: `After thorough analysis and presentation of several product implementation options, a faster and more cost-effective approach was chosen - Progressive Web App (PWA). PWA functions seamlessly across all mobile platforms and in any web environment. \n \n The MVP was launched within 3 months, and development of functionality continued as demand for P2P exchanges continued to grow.`,
      ru: `После тщательного анализа и презентации нескольких вариантов внедрения продукта был выбран более быстрый и экономически эффективный подход — Progressive Web App (PWA). PWA бесперебойно работает на всех мобильных платформах и в любой веб-среде. MVP был запущен в течение 3 месяцев, а развитие функциональности продолжалось, поскольку спрос на P2P-биржи продолжал расти.`,
    },
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
    images: {
      title: '/images/projects/ShortCast/ShortCastMain.png',
      logo: '/images/projects/ShortCast/ShortCastLogo.png',
      sliderContent: [
        '/images/projects/ShortCast/SliderContent/Slide1.png',
        '/images/projects/ShortCast/SliderContent/Slide2.png',
        '/images/projects/ShortCast/SliderContent/Slide3.png',
      ],
      goalImage: '/images/projects/ShortCast/ShortCastGoal.png',
      solutionImage: '/images/projects/ShortCast/ShortCastSolution.png',
    },
    tags: ['React', 'Next JS', 'Node JS', 'Strapi'],
    projectGoal: {
      en: `Shortcast is a service for creating video notes designed to enhance remote productivity. Users can record videos of their screen and camera and then share them with their colleagues. The client approached us with the task of enhancing the MVP service for a swift release of the beta version of the product. Our objective was to efficiently and promptly enhance the screen recorder with a flexible administrative panel, enabling the videos to be indexed by search engines.`,
      ru: `Shortcast — сервис для создания видеозаметок, предназначенный для повышения продуктивности удаленной работы. Пользователи могут записывать видео со своего экрана и камеры, а затем делиться ими со своими коллегами. Клиент обратился к нам с задачей доработать сервис MVP для скорейшего выпуска бета-версии продукта. Нашей целью было эффективно и оперативно дополнить программу записи экрана гибкой административной панелью, позволяющей индексировать видео поисковыми системами.`,
    },
    solution: {
      en: `After delving into and studying the project, the team proposed to the client to rewrite the backend part of the product in order to swiftly implement content administration and user management features, including subscriptions. The team updated the product and integrated the necessary functionality for launch within 1.5 months. \n \n The product comprises a web dashboard and a Chrome extension, which facilitates the recording of the user's screen and camera.`,
      ru: `Углубившись и изучив проект, команда предложила клиенту переписать серверную часть продукта, чтобы оперативно реализовать функции администрирования контента и управления пользователями, включая подписки. Команда обновила продукт и интегрировала необходимый для запуска функционал за 1,5 месяца.\n\nПродукт включает в себя веб-панель и расширение Chrome, которое облегчает запись экрана и камеры пользователя.`,
    },
    comp: <></>,
  },
  {
    title: 'Feexle',
    about: {
      en: 'Frontend and backend development of finance tracking app',
      ru: 'Разработка интерфейса и бэкенда приложения для отслеживания финансов',
    },
    link: 'https://app.feexle.com/sign-in',
    date: '2022',
    images: {
      title: '/images/projects/Feexle/FeexleMain.png',
      logo: '/images/projects/Feexle/FeexleLogo.png',
      sliderContent: [
        '/images/projects/Feexle/SliderContent/Slide1.png',
        '/images/projects/Feexle/SliderContent/Slide2.png',
        '/images/projects/Feexle/SliderContent/Slide3.png',
      ],
      goalImage: '/images/projects/Feexle/FeexleGoal.png',
      solutionImage: '/images/projects/Feexle/FeexleSolution.png',
    },
    tags: ['Kotlin', 'Spring Boot', 'React', 'TypeScript'],
    projectGoal: {
      en: `The client approached us with a request to develop a mobile application for peer-to-peer (P2P) exchanges.`,
      ru: `Клиент обратился к нам с просьбой разработать мобильное приложение для однорангового (P2P) обмена.`,
    },
    solution: {
      en: `After thorough analysis and presentation of several product implementation options, a faster and more cost-effective approach was chosen - Progressive Web App (PWA). PWA functions seamlessly across all mobile platforms and in any web environment. \n \n The MVP was launched within 3 months, and development of functionality continued as demand for P2P exchanges continued to grow.`,
      ru: `После тщательного анализа и презентации нескольких вариантов внедрения продукта был выбран более быстрый и экономически эффективный подход — Progressive Web App (PWA). PWA бесперебойно работает на всех мобильных платформах и в любой веб-среде. MVP был запущен в течение 3 месяцев, а развитие функциональности продолжалось, поскольку спрос на P2P-биржи продолжал расти.`,
    },
    comp: <></>,
  },
  {
    title: 'Invest Allocator',
    about: {
      en: 'Development of Chrome Extension and frontend of web app for a fintech startup',
      ru: 'Разработка Chrome расширения и интерфейса веб-приложения для финтех-стартапа',
    },
    link: 'https://app.investallocator.com/account/sign-in',
    date: '2021',
    images: {
      title: '/images/projects/InvestAllocator/InvestAllocatorMain.png',
      logo: '/images/projects/InvestAllocator/InvestAllocatorLogo.png',
      sliderContent: [
        '/images/projects/InvestAllocator/SliderContent/Slide1.png',
        '/images/projects/InvestAllocator/SliderContent/Slide2.png',
        '/images/projects/InvestAllocator/SliderContent/Slide3.png',
      ],
      goalImage: '/images/projects/InvestAllocator/InvestAllocatorGoal.png',
      solutionImage:
        '/images/projects/InvestAllocator/InvestAllocatorSolution.png',
    },
    tags: ['React', 'Chrome API', 'CSS', 'HTML'],
    projectGoal: {
      en: `The client came with a product idea for an investment portfolio management service. Initially, the task revolved around developing a Chrome extension, but later the team was entrusted with the frontend service development.`,
      ru: `Клиент пришел с идеей продукта по управлению инвестиционным портфелем. Изначально задача заключалась в разработке расширения для Chrome, но позже команде доверили разработку фронтенд-сервиса.`,
    },
    solution: {
      en: `As a result of the work, we successfully implemented a Chrome extension and a web dashboard featuring various graphs and diagrams optimized for both mobile and desktop resolutions.`,
      ru: `В результате работы мы успешно реализовали расширение Chrome и веб-панель с различными графиками и диаграммами, оптимизированными как для мобильных, так и для десктопных разрешений.`,
    },
    comp: <></>,
  },
];
