import React, { ReactElement, PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
  to: string;
  colorized?: boolean;
};

export default function Link(props: PropsWithChildren<Props>): ReactElement {
  const { to, colorized = false, children } = props;

  return (
    <S.Colorized colorized={colorized}>
      <S.Link to={to}>{children}</S.Link>
    </S.Colorized>
  );
}
