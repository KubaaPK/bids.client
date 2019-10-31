import React from 'react';
import Navigation from '../../../components/Navigation';
import * as S from './styled';
import Categories from './components/Categories';

const Main: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <S.Wrapper>
        <Categories />
      </S.Wrapper>
    </>
  );
};

export default Main;
