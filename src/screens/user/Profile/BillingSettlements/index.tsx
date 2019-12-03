import React from 'react';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import Options from '../Options';
import Navigation from '../../../../components/Navigation';
import Main from '../../../../components/Layout/Main';
import Saldo from './Saldo';

const BillingSettlements: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <Main>
        <Options />
        <S.Wrapper>
          <Typography.Title
            text="Rozliczenia"
            font={{
              size: '2rem'
            }}
          />
          <Saldo />
        </S.Wrapper>
      </Main>
    </>
  );
};

export default BillingSettlements;
