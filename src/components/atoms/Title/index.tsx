import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
  font?: {
    weight?: 400 | 500 | 700;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  };
};

export default function Title(props: Props): ReactElement {
  const { text, font } = props;

  return (
    <S.Title size={font && font.size} weight={font && font.weight}>
      {text}
    </S.Title>
  );
}
