import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export default function Heading({ text, level = 1 }: Props): ReactElement {
  return (
    <S.Heading level={level} as={`h${level}` as any}>
      {text}
    </S.Heading>
  );
}
