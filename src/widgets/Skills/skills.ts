type Skill = {
  title: string;
  primary: boolean;
  tags: string[];
};

export const SKILLS: Skill[] = [
  {
    title: 'Frontend',
    primary: true,
    tags: ['Vue', 'TypeScript', 'JavaScript', 'NextJS', 'NuxtJS', 'React'],
  },
  {
    title: 'Backend',
    primary: true,
    tags: ['Low code', 'Strapi', 'NodeJS', 'Express', 'Mongo DB', 'MySQL'],
  },
  {
    title: 'Devops',
    primary: false,
    tags: ['Docker', 'Heroku', 'AWS', 'Yandex Cloud'],
  },
  {
    title: 'QA',
    primary: false,
    tags: ['Auto-testing', 'Smoke tests', 'Stress Testing', 'Cypress'],
  },
];
