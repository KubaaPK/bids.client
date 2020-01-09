import React, { ReactElement } from 'react';
import * as S from './styled';
import { SectionTitle, SidebarLink } from '../../atoms';

type Props = {
  switchComponent: (componentName: string) => void;
};

export default function AdminDashboardNavigation(props: Props): ReactElement {
  const { switchComponent } = props;
  return (
    <S.List>
      <SectionTitle
        text="Panel"
        font={{
          size: 's',
          weight: 500,
          variant: 'lighten',
          uppercase: true
        }}
      />
      <S.ListElement onClick={() => switchComponent('categories')}>
        <SidebarLink text="Kategorie" type="paragraph" />
      </S.ListElement>
      <S.ListElement onClick={() => switchComponent('parameters')}>
        <SidebarLink text="Parametry" type="paragraph" />
      </S.ListElement>
      <S.ListElement onClick={() => switchComponent('delivery-methods')}>
        <SidebarLink text="Dostawa" type="paragraph" />
      </S.ListElement>
    </S.List>
  );
}
