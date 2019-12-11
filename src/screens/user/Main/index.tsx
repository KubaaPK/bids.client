import React from 'react';
import Navigation from '../../../components/Navigation';
import * as S from './styled';
import Categories from './Categories';
import Offers from '../../../components/Offers';
import MainWrapper from '../../../components/Layout/Main';

const Main: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <MainWrapper
        props={{
          desktopDirection: 'row'
        }}
      >
        <Categories />
        <Offers />
      </MainWrapper>
    </>
  );
};

export default Main;
