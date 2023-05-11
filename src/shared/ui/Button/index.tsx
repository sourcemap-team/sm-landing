import styles from './Button.module.scss';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'classnames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  color?: 'toxic' | 'white';
};

export const Button: FC<ButtonProps> = (props) => {
  const { type = 'button', color = 'toxic', className, children, icon } = props;
  return (
    <button
      type={type}
      {...props}
      className={cx(styles.btn, styles[color], className)}
    >
      {children}
      {icon}
    </button>
  );
};
