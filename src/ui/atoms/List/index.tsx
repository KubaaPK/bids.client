import React, { ReactElement, PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
  type: 'ordered' | 'unordered';
};

export default function List(props: PropsWithChildren<Props>): ReactElement {
  const { type, children } = props;

  if (type === 'ordered') {
    return <S.Ol>{children}</S.Ol>;
  }
  return <S.Ul>{children}</S.Ul>;
}
