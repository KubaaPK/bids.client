import React from 'react';
import * as S from './styled';

type Props = {
  switchComponent: (componentName: string) => void;
};

const DashboardNavigation: React.FunctionComponent<Props> = (props: Props) => {
  const { switchComponent } = props;
  return (
    <S.List>
      <S.Title>Panel</S.Title>
      <S.ListElement onClick={() => switchComponent('categories')}>
        Kategorie
      </S.ListElement>
      <S.ListElement onClick={() => switchComponent('parameters')}>
        Parametry
      </S.ListElement>
      <S.ListElement onClick={() => switchComponent('delivery-methods')}>
        Dostawa
      </S.ListElement>
    </S.List>
  );
};

export default DashboardNavigation;
