import React, { PropsWithChildren, JSXElementConstructor } from 'react';
import * as S from './styled';
import { NavigationContainer } from '../../../containers';

type Props = {
  sideBar: any;
};

export default function WithLeftSidebarTemplate(
  props: PropsWithChildren<Props>
): React.ReactElement {
  const { sideBar, children } = props;

  return (
    <>
      <NavigationContainer />
      <S.Wrapper>
        {sideBar}
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </>
  );
}
