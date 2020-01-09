import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
};

export default function AdminDashboardAccordionTitle(
  props: Props
): ReactElement {
  const { text } = props;

  return <S.Text>{text}</S.Text>;
}
