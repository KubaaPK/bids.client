import React from 'react';
import * as S from './styled';
import SignUpForm from './SignUpForm';
import { Main } from '../../../components/templates';

export default function SignUp() {
  return (
    <>
      <Main
        props={{
          desktopFlexDirection: 'column'
        }}
      >
        <SignUpForm />
        <S.ToSignUpWrapper>
          <S.ToSignInMessage>Masz już konto?</S.ToSignInMessage>
          <S.LinkToSignIn to="/zaloguj-sie">Zaloguj się</S.LinkToSignIn>
        </S.ToSignUpWrapper>
      </Main>
    </>
  );
}
