import React from 'react';
import Navigation from '../../../components/Navigation';
import * as S from './styled';
import Categories from './Categories';
import LatestOffers from './LatestOffers';
import Offers from '../../../components/Offers';

const Main: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <S.Wrapper>
        <Categories />
        <LatestOffers />
        <Offers />
      </S.Wrapper>
    </>
  );
};

export default Main;
