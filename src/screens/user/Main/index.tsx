import React from 'react';
import Navigation from '../../../components/Navigation';
import * as S from './styled';
import Categories from './Categories';
import LatestOffers from './LatestOffers';

const Main: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <S.Wrapper>
        <Categories />
        <LatestOffers />
      </S.Wrapper>
    </>
  );
};

export default Main;
