import React, { ReactElement } from 'react';
import { GenericTemplate } from '../../templates';
import { SignUpFormContainer } from '../../../containers';

export default function SignUp(): ReactElement {
  return (
    <>
      <GenericTemplate>
        <SignUpFormContainer />
      </GenericTemplate>
    </>
  );
}
