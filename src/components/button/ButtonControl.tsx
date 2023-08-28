import React from 'react';

import s from './ButtonControl.module.scss';

interface ButtonComponentProps {
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
  children: React.Node;
}

const ButtonControl = ({
  onClick,
  backgroundColor = 'teal',
  color = 'white',
  children,
}: ButtonComponentProps) => {
  return (
    <button
      className={s.buttonComponent}
      onClick={onClick}
      style={{ backgroundColor, color }}
    >
      {children}
    </button>
  );
};
export default ButtonControl;
