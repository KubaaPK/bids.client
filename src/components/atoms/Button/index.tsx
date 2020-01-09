import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  type: 'button' | 'submit';
  text: string;
  variant: 'full' | 'bordered' | 'blank' | 'error';
  handleClick?: (args: any) => void;
};

export default function Button(props: Props): ReactElement {
  const { type, text, variant, handleClick } = props;

  return (
    <S.Button type={type} variant={variant} onClick={handleClick} role="button">
      {text}
    </S.Button>
  );
}
