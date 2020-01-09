import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  type: 'link' | 'paragraph';
  to?: string;
  text: string;
};

export default function SidebarLink(props: Props): ReactElement {
  const { text, type, to } = props;

  return type === 'link' ? (
    <S.StyledLink to={to!}>{text}</S.StyledLink>
  ) : (
    <S.Paragraph>{text}</S.Paragraph>
  );
}
