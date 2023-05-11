import styles from './SocialLinks.module.scss';

import { FC } from 'react';
import cx from 'classnames';

import { Icon } from '@/shared/ui';

type Link = {
  id: number;
  icon: {
    name: string;
    width: number;
    height: number;
  };
  href: string;
};

type SocialLinksProps = {
  links?: Link[];
  className?: string;
};

export const SocialLinks: FC<SocialLinksProps> = ({ links, className }) => {
  if (!links) {
    return null;
  }

  return (
    <ul className={cx(styles.links, className)}>
      {links.map((l) => (
        <li key={l.id}>
          <a
            title={l.icon.name}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <Icon {...l.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
