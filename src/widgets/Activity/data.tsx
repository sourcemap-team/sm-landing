type Activity = {
  img: {
    [key: string]: string;
  };
  link: string;
  title: {
    [key: string]: string;
  };
  tag: {
    [key: string]: string;
  };
};

const ACTIVITIES_LIST: Activity[] = [
  {
    img: {
      en: '/images/articles/yandex.png',
      ru: '/images/articles/yandex.png',
    },
    link: 'https://events.yandex.ru/events/meetings/yalovefrontend/?openTalkVideo=1910-4',
    title: {
      en: 'Lecture for Yandex',
      ru: 'Лекция для Яндекс',
    },
    tag: {
      en: 'Speech',
      ru: 'Выступление',
    },
  },
  {
    img: {
      en: '/images/articles/vc.png',
      ru: '/images/articles/vcRu.png',
    },
    link: 'https://vc.ru/hr/399864-bystraya-proverka-biznes-gipotez-ili-zachem-startapam-akselerator',
    title: {
      en: 'Article on VC.RU',
      ru: 'Статья о VC.RU',
    },
    tag: {
      en: 'Thought',
      ru: 'Мнение',
    },
  },
  {
    img: {
      en: '/images/articles/skillbox.png',
      ru: '/images/articles/skillbox.png',
    },
    link: 'https://www.youtube.com/watch?v=2TCtQ7wteIk&ab_channel=Skillbox%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD',
    title: {
      en: 'Workshop for Skillbox',
      ru: 'Семинар для Skillbox',
    },
    tag: {
      en: 'Speech',
      ru: 'Выступление',
    },
  },
  {
    img: {
      en: '/images/articles/course.png',
      ru: '/images/articles/course.png',
    },
    link: 'https://www.youtube.com/@CoonJS/featured',
    title: {
      en: 'HTML CSS',
      ru: 'HTML CSS',
    },
    tag: {
      en: 'Our courses',
      ru: 'Наши курсы',
    },
  },
];

const ACTIVITY_INFO: {
  [key: string]: string;
} = {
  en: 'We actively participate in hackathons, speak at various platforms, record courses and share with the community our experience.',
  ru: 'Мы активно участвуем в хакатонах, выступаем на различных платформах, записываем курсы и делимся с сообществом своим опытом.',
};

export { ACTIVITIES_LIST, ACTIVITY_INFO };
