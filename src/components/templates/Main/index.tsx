import React, { ReactElement } from 'react';
import { Navigation } from '../../organisms';
import * as S from './styled';

type Props = {
  mobileFlexDirection?: 'column' | 'row';
  tabletFlexDirection?: 'column' | 'row';
  desktopFlexDirection?: 'column' | 'row';
};

export default function Main({
  props,
  children
}: {
  props: Props;
  children: any;
}): ReactElement {
  const {
    mobileFlexDirection,
    desktopFlexDirection,
    tabletFlexDirection
  } = props;

  return (
    <>
      <Navigation />
      <S.Main
        mobileFlexDirection={mobileFlexDirection && mobileFlexDirection}
        tabletFlexDirection={tabletFlexDirection && tabletFlexDirection}
        desktopFlexDirection={desktopFlexDirection && desktopFlexDirection}
      >
        {children}
      </S.Main>
    </>
  );
}
