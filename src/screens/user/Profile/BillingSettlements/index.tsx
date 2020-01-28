import React from 'react';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import Fee from './Fee';
import { WithLeftSidebarTemplate } from '../../../../ui/templates';
import { ProfileNavigation } from '../../../../ui/organisms';

const BillingSettlements: React.FunctionComponent<{}> = () => {
  return (
    <WithLeftSidebarTemplate sideBar={<ProfileNavigation />}>
      <S.Wrapper>
        <Typography.Title
          text="Rozliczenia"
          font={{
            size: '2rem'
          }}
        />
        <Fee />
      </S.Wrapper>
    </WithLeftSidebarTemplate>
  );
};

export default BillingSettlements;
