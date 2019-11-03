import React from 'react';
import { ClipLoader } from 'react-spinners';
import * as S from './styled';

type Props = {
  text: any;
  type: 'submit' | 'button';
  variant: 'blank' | 'bordered' | 'full';
  isPending?: boolean;
};

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const { text, variant, type, isPending = false } = props;
  return (
    <S.Button type={type} variant={variant} disabled={isPending}>
      <S.Text>{isPending ? <ClipLoader size={15} /> : text}</S.Text>
    </S.Button>
  );
};

export default Button;
