import React from 'react';
import { GenericTemplate } from '../../templates';
import { ProfileNavigation } from '../../organisms';
import * as S from './styled';

export default function Profile(): React.ReactElement {
  return (
    <GenericTemplate>
      <S.Wrapper>
        <ProfileNavigation />
      </S.Wrapper>
    </GenericTemplate>
  );
}
