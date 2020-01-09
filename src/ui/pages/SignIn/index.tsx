import React, { ReactElement } from 'react';
import { GenericTemplate } from '../../templates';
import { SignInFormContainer } from '../../../containers';

export default function SignIn(): ReactElement {
  return (
    <GenericTemplate>
      <SignInFormContainer />
    </GenericTemplate>
  );
}
