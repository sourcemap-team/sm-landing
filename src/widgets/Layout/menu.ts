type Menu = {
  name: Record<string, string>;
  href: string;
  id: string;
};

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
      en: 'What we do',
      ru: 'Что делаем',
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
