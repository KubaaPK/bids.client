import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import Categories from './components/categories/Categories';
import LatestOffers from './components/latest-offers/LatestOffers';
import { Wrapper } from './styled';

const Main: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <Wrapper>
        <Categories />
        <LatestOffers />
      </Wrapper>
    </>
  );
};

export default Main;
