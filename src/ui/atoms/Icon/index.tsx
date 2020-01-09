import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  icon: any;
  size?: string;
  onClick?: () => void;
};

export default function IconAtom(props: Props): ReactElement {
  const { icon, size = '1.5rem', onClick } = props;

  return (
    <S.Wrapper size={size} onClick={onClick}>
      {icon}
    </S.Wrapper>
  );
}
