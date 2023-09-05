type Menu = {
  name: Record<string, string>;
  href: string;
  id: string;
};

export const MENU_IDS = ['services', 'projects', 'skills', 'pricing'];

export const MENU_ITEMS: Menu[] = [
  {
    name: {
      en: 'Services',
      ru: 'Услуги',
    },
    href: '#services',
    id: 'services',
  },
  {
    name: {
      en: 'Projects',
      ru: 'Проекты',
    },
    href: '#projects',
    id: 'projects',
  },
  {
    name: {
      en: 'Stack',
      ru: 'Стек',
    },
    href: '#skills',
    id: 'skills',
  },
  {
    name: {
      en: 'Pricing',
      ru: 'Cтоимость',
    },
    href: '#price',
    id: 'pricing',
  },
];

export const ContactUsBtnLocaleMap = new Map([
  ['en', 'Discuss my task'],
  ['ru', 'Обсудить задачу'],
]);
