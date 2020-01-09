import React, { PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
  heading?: boolean;
  numeric?: boolean;
};

export default function TableCell(
  props: PropsWithChildren<Props>
): React.ReactElement {
  const { heading = false, numeric = false, children } = props;

  return heading ? (
    <S.Th>{children}</S.Th>
  ) : (
    <S.Td numeric={numeric}>{children}</S.Td>
  );
}
