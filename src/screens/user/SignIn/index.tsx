import React from 'react';
import * as S from './styled';
import SignInForm from './SignInForm';
import { Main } from '../../../components/templates';

export default function SignIn() {
  return (
    <>
      <Main
        props={{
          desktopFlexDirection: 'column'
        }}
      >
        <SignInForm />
        <S.ToSignUpWrapper>
          <S.ToSignUpMessage>Nie masz konta?</S.ToSignUpMessage>
          <S.LinkToSignUp to="/zaloz-konto">Zarejestruj się</S.LinkToSignUp>
        </S.ToSignUpWrapper>
      </Main>
    </>
  );
}
