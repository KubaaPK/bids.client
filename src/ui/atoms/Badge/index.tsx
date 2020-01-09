import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
  type: 'full' | 'bordered';
  color: string;
  fontColor: string;
};

export default function Badge(props: Props): React.ReactElement {
  const { color, fontColor, text, type } = props;

  return (
    <S.Wrapper color={color} fontColor={fontColor} type={type}>
      {text}
    </S.Wrapper>
  );
}
