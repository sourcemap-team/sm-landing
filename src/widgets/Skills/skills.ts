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
    tags: [
      'Kotlin',
      'PostgresSQL',
      'Spring Boot',
      'Strapi',
      'NodeJS',
      'Hibernate',
    ],
  },
  {
    title: 'Devops',
    primary: false,
    tags: ['Docker', 'Heroku', 'AWS'],
  },
  {
    title: 'QA',
    primary: false,
    tags: ['Auto-testing', 'Smoke tests', 'Stress Testing'],
  },
];
