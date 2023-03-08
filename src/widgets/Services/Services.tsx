import styles from './Services.module.scss';

import React from 'react';

import { Collapse } from '@/shared/ui';

const SERVICES_ITEMS = [
  {
    title: 'Web Apps',
    content: (
      <p>
        One of the priorities of our team. We develop services from simple web
        applications to highly loaded banking systems. We install a convenient
        admin panel for working with the content of your system (CMS).
      </p>
    ),
    icon: '/icons/services/planet.svg',
  },
  {
    title: 'Mobile Apps',
    content: (
      <p>
        We create cross-platform mobile applications taking into account the
        project&apos;s specifics and the customer&apos;s wishes, using modern
        technologies and tools such as React Native, Cordova, and CapasitorJS.
        We carefully manage the project from assistance in drafting technical
        specifications to uploading the finished application to the market. We
        preliminary perform functional and technical analyses of existing
        solutions and, if necessary, select references.
      </p>
    ),
    icon: '/icons/services/mobile.svg',
  },
  {
    title: 'Chat Bots',
    content: (
      <p>
        We create simple and easy-to-use chatbots that help simplify and
        automate the process for both the client and the business: make an
        appointment, take an order, clarify background information, and much
        more. Platforms: Telegram/What&apos;s App
      </p>
    ),
    icon: '/icons/services/chat.svg',
  },
  {
    title: 'Chrome Extensions',
    content: (
      <p>
        We develop Chrome Extensions of any complexity from design to release in
        the Chrome Web Store with all the necessary settings. This solution is
        great for those who want to expand the functionality and accessibility
        of their product for different users. According to our statistics, users
        are more likely and more likely to open the Chrome Extension icon than
        go to the product page because it is faster and easier.
      </p>
    ),
    icon: '/icons/services/chrome.svg',
  },
];

export const Services = () => {
  return (
    <div className={styles.container} id="services">
      <h2 className="title">Services</h2>
      {SERVICES_ITEMS.map((service) => (
        <Collapse key={service.title} title={service.title} icon={service.icon}>
          {service.content}
        </Collapse>
      ))}
    </div>
  );
};
