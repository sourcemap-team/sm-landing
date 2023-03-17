import React, { ReactNode } from 'react';

type ServicesItem = {
  title: {
    [key: string]: string;
  };
  content: {
    [key: string]: ReactNode;
  };
  icon: string;
};

export const SERVICES_ITEMS: ServicesItem[] = [
  {
    title: {
      en: 'Web Apps',
      ru: 'Разработка веб-сервисов',
    },
    content: {
      en: (
        <>
          One of the priorities of our team. We develop services from simple web
          applications to highly loaded banking systems. We install a convenient
          admin panel for working with the content of your system (CMS).
        </>
      ),
      ru: (
        <>
          Одно из приоритетных направлений нашей команды. Разрабатываем сервисы
          от простых веб-приложений до высоконагруженных банковских систем.
          Установим удобную панель администратора для работы с контентом в вашей
          системе (CMS).
        </>
      ),
    },
    icon: '/icons/services/planet.svg',
  },
  {
    title: {
      en: 'Mobile Apps',
      ru: 'Мобильные приложения',
    },
    content: {
      en: (
        <>
          We create cross-platform mobile applications taking into account the
          project&apos;s specifics and the customer&apos;s wishes, using modern
          technologies and tools such as React Native, Cordova, and CapasitorJS.
          We carefully manage the project from assistance in drafting technical
          specifications to uploading the finished application to the market. We
          preliminary perform functional and technical analyses of existing
          solutions and, if necessary, select references.
        </>
      ),
      ru: (
        <>
          Создаем кроссплатформенные мобильные приложения с учетом специфики
          проекта и пожеланий заказчика, используя современные технологии и
          инструменты, такие как React Native, Cordova, CapasitorJS. Тщательно
          ведем проект от помощи в составлении технического задания до загрузки
          готового приложения в маркет. Предварительно проводим функциональный и
          технический анализы существующих решений и при необходимости подбираем
          референсы.
        </>
      ),
    },
    icon: '/icons/services/mobile.svg',
  },
  {
    title: {
      en: 'Chat Bots',
      ru: 'Создание чат ботов',
    },
    content: {
      en: (
        <>
          We create simple and easy-to-use chatbots that help simplify and
          automate the process for both the client and the business: make an
          appointment, take an order, clarify background information, and much
          more. Platforms: Telegram/What&apos;s App
        </>
      ),
      ru: (
        <>
          Создаем простые и удобные в использовании чат-боты, которые помогают
          упростить и автоматизировать процесс как для клиента, так и для
          бизнеса: записаться на приём, принять заказ, уточнить справочную
          информацию и многое другое. Платформы: Telegram/What’s App
        </>
      ),
    },
    icon: '/icons/services/chat.svg',
  },
  {
    title: {
      en: 'Chrome Extensions',
      ru: 'Расширения для Chrome',
    },
    content: {
      en: (
        <>
          We develop Chrome Extensions of any complexity from design to release
          in the Chrome Web Store with all the necessary settings. This solution
          is great for those who want to expand the functionality and
          accessibility of their product for different users. According to our
          statistics, users are more likely and more likely to open the Chrome
          Extension icon than go to the product page because it is faster and
          easier.
        </>
      ),
      ru: (
        <>
          Мы разрабатываем Chrome Extensions любой сложности от проектирования
          до релиза в Chrome Web Store со всеми необходимыми настройками. Это
          решение отлично подходит для тех, кто хочет расширить функционал и
          доступность своего продукта для разных пользователей. По нашей
          статистике пользователи охотнее и чаще открывают иконку Chrome
          Extension, нежели чем переходят на страницу продукта, потому что это
          быстрее и проще для них.
        </>
      ),
    },
    icon: '/icons/services/chrome.svg',
  },
];
