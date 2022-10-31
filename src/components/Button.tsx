import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo, useMemo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

function ButtonComponent({ iconName, title, selected, ...rest }: ButtonProps) {
  const className = useMemo(() => {
    return selected ? 'selected' : '';
  }, [selected]);

  const color = useMemo(() => {
    return selected ? '#FAE800' : '#FBFBFB';
  }, [selected]);

  return (
    <button type="button" className={className} {...rest}>
      <Icon name={iconName} color={color} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent);
