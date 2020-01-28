import React from 'react';
import * as S from './styled';
import { Navigation } from '../../../components/organisms';
import Options from './Options';
import { ProfileNavigation } from '../../../ui/organisms';
import { WithLeftSidebarTemplate } from '../../../ui/templates';

const Profile: React.FunctionComponent<{}> = () => {
  // return (
  //   <>
  //     <Navigation />
  //     <S.Main>
  //       <Options />
  //     </S.Main>
  //   </>
  // );
  return (
    <WithLeftSidebarTemplate sideBar={<ProfileNavigation />}>
      <Options />
    </WithLeftSidebarTemplate>
  );
};

export default Profile;
