import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
  htmlFor: string;
};

export default function Label(props: Props): ReactElement {
  const { text, htmlFor } = props;

  return <S.Label htmlFor={htmlFor}>{text}</S.Label>;
}
