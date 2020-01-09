import React from 'react';
import { Categories, Offers } from '../../../components/organisms';
import { Main as MainWrapper } from '../../../components/templates';

export default function Main() {
  return (
    <>
      <MainWrapper
        props={{
          desktopFlexDirection: 'row'
        }}
      >
        <Categories />
        <Offers />
      </MainWrapper>
    </>
  );
}
