import React, { PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
  head?: React.ReactNode;
  foot?: React.ReactNode;
};

export default function Table(
  props: PropsWithChildren<Props>
): React.ReactElement {
  const { head, foot, children } = props;

  return (
    <S.Table>
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </S.Table>
  );
}
