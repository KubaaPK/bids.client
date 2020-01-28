import React from 'react';
import * as S from './styled';
import { AdminDashboard, DashboardNavigation } from '../../organisms';
import { WithLeftSidebarTemplate } from '../../templates';

export default function Index(): React.ReactElement {
  const [currentComponent, setCurrentComponent] = React.useState<string>(
    'categories'
  );

  function changeComponent(componentName: string): void {
    setCurrentComponent(componentName);
  }

  return (
    <S.Wrapper>
      <WithLeftSidebarTemplate sideBar={<DashboardNavigation changeComponent={changeComponent}/>}>
        <AdminDashboard currentComponent={currentComponent}/>
      </WithLeftSidebarTemplate>
    </S.Wrapper>
  );
}
