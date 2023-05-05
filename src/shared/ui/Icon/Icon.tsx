import { FC, SVGAttributes } from 'react';

import { iconNames } from './iconName';

export type IconProps = SVGAttributes<SVGElement> & {
  name: string;
};

export const Icon: FC<IconProps> = (props) => {
  const {
    width,
    height,
    viewBox = `0 0 ${width} ${height}`,
    fill = 'currentColor',
  } = props;
  return (
    <svg viewBox={viewBox} fill={fill} {...props}>
      {iconNames[props.name]}
    </svg>
  );
};
