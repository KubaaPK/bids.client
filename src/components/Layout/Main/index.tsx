import React from 'react';
import * as S from './styled';

type Props = {
  mobileDirection?: 'column' | 'row';
  tabletDirection?: 'column' | 'row';
  desktopDirection?: 'column' | 'row';
};

const Main: React.FunctionComponent<{ children: any; props?: Props }> = ({
  children,
  props
}: any) => {
  const { mobileDirection, tabletDirection, desktopDirection } = props;
  return (
    <S.Main
      mobileDirection={mobileDirection}
      tabletDirection={tabletDirection}
      desktopDirection={desktopDirection}
    >
      {children}
    </S.Main>
  );
};

export default Main;
