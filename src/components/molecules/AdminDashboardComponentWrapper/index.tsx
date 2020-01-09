import React, { ReactElement } from 'react';
import * as S from './styled';

export default function AdminDashboardComponentWrapper({
  children
}: any): ReactElement {
  return <S.ComponentWrapper>{children}</S.ComponentWrapper>;
}
