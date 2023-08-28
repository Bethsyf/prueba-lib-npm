import React from 'react';

import s from './TextControl.module.scss';

interface TextComponentProps {
  text: string;
  color?: string;
  fontSize?: string;
}

const TextControl = ({
  text,
  color = 'black',
  fontSize = '16px',
}: TextComponentProps) => {
  return (
    <div className={s.textComponent} style={{ color, fontSize }}>
      {text}
    </div>
  );
};

export default TextControl;
