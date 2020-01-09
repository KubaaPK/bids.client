import React from 'react';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import Options from '../Options';
import { Navigation } from '../../../../components/organisms';
import Main from '../../../../components/Layout/Main';
import Fee from './Fee';

const BillingSettlements: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <Main
        props={{
          desktopDirection: 'row'
        }}
      >
        <Options />
        <S.Wrapper>
          <Typography.Title
            text="Rozliczenia"
            font={{
              size: '2rem'
            }}
          />
          <Fee />
        </S.Wrapper>
      </Main>
    </>
  );
};

export default BillingSettlements;
