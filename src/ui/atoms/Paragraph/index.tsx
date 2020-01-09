import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
};

export default function Paragraph(props: Props): ReactElement {
  const { text } = props;

  return <S.Paragraph>{text}</S.Paragraph>;
}
