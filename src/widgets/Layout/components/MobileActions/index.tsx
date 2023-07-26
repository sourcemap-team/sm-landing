import styles from './MobileActions.module.scss';
import cx from 'classnames';

import React from 'react';

import { AnimatedCross, Button, Icon } from '@/shared/ui';

type MobileActionsProps = {
  open: boolean;
  onClick: () => void;
};

export const MobileActions = ({ open, onClick }: MobileActionsProps) => {
  return (
    <div className={styles.actionsContainer}>
      <a
        href="https://t.me/ogurechnikov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className={cx(styles.btn, styles.contacts)}>
          <Icon name="telegramSmall" width={18} height={18} />
        </Button>
      </a>
      <Button
        color={open ? 'white' : 'toxic'}
        onClick={onClick}
        className={styles.btn}
      >
        <AnimatedCross open={open} />
      </Button>
    </div>
  );
};
