import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  type?: 'normal' | 'link';
  to?: string;
};

export default function Logo(props: Props): ReactElement {
  const { type = 'normal', to = '/' } = props;

  if (type === 'normal') {
    return <S.Logo>bids</S.Logo>;
  }
  return <S.LogoLink to={to}>bids</S.LogoLink>;
}
