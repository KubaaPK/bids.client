import React from 'react';
import Navigation from '../../../components/Navigation';
import * as S from './styled';
import Categories from './Categories';
import LatestOffers from './LatestOffers';
import Offers from '../../../components/Offers';
import MainWrapper from '../../../components/Layout/Main';

const Main: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <MainWrapper>
        <S.Wrapper>
          <Categories />
          <LatestOffers />
          <Offers />
        </S.Wrapper>
      </MainWrapper>
    </>
  );
};

export default Main;
