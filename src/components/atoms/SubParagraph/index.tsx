import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
};

export default function SubParagraph(props: Props): ReactElement {
  const { text } = props;

  return <S.SubParagraph>{text}</S.SubParagraph>;
}
