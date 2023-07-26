type Link = {
  id: number;
  href: string;
  icon: {
    name: string;
    width: number;
    height: number;
  };
};

export const LINKS: Link[] = [
  {
    id: 1,
    icon: {
      name: 'linkedin',
      width: 20,
      height: 21,
    },
    href: 'https://www.linkedin.com/company/sourcemap-pro/',
  },
  {
    id: 2,
    icon: {
      name: 'github',
      width: 20,
      height: 20,
    },
    href: 'https://github.com/sourcemap-team',
  },
];
