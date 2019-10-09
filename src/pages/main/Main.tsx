import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Categories from './components/categories/Categories';
import { Wrapper } from './styled';

const Main: React.FunctionComponent<{}> = () => {
  return (
    <Wrapper>
      <Navigation />
      <Categories />
    </Wrapper>
  );
};

export default Main;
