import React, { ReactElement, PropsWithChildren } from 'react';
import * as S from './styled';
import { NavigationContainer } from '../../../containers';

type Props = {};

export default function GenericTemplate(
  props: PropsWithChildren<Props>
): ReactElement {
  const { children } = props;

  return (
    <>
      <NavigationContainer />
      <S.Content>{children}</S.Content>
    </>
  );
}
