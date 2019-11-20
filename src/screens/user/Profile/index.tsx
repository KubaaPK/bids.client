import React from 'react';
import * as S from './styled';
import Navigation from '../../../components/Navigation';
import Options from './Options';

const Profile: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <S.Main>
        <Options />
      </S.Main>
    </>
  );
};

export default Profile;
