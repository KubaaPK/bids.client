import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
  font?: {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    weight?: 400 | 500 | 700;
    uppercase?: boolean;
    variant?: 'lighten';
  };
};

export default function SectionTitle(props: Props): ReactElement {
  const { text, font } = props;

  return (
    <S.SectionTitle
      size={font && font.size}
      weight={font && font.weight}
      variant={font && font.variant}
      uppercase={font && font.uppercase}
    >
      {text}
    </S.SectionTitle>
  );
}
