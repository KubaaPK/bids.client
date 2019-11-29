import React from 'react';
import * as S from './styled';

type Props = {
  type: 'button' | 'submit';
  text: string;
  variant: 'full' | 'bordered' | 'blank';
  handleClick?: (args: any) => void;
};

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const { type, text, variant, handleClick } = props;

  return (
    <S.Button type={type} variant={variant} onClick={handleClick} role="button">
      {text}
    </S.Button>
  );
};

export default Button;
