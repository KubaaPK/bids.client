import React from 'react';
import * as S from './styled';

const Main: React.FunctionComponent<{ children: any }> = ({
  children
}: any) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
