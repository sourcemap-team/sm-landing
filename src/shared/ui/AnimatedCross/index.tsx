import styles from './AnimatedCross.module.scss';

import { FC } from 'react';
import cx from 'classnames';

type AnimatedCrossProps = {
  open?: boolean;
};

export const AnimatedCross: FC<AnimatedCrossProps> = ({ open = false }) => {
  return (
    <div className={cx(styles.wrap, open && styles.open)}>
      <span className={styles.line} />
      <span className={styles.line} />
    </div>
  );
};
