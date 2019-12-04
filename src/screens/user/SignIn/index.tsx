import React from 'react';
import * as S from './styled';
import Navigation from '../../../components/Navigation';
import SignInForm from './SignInForm';
import Main from '../../../components/Layout/Main';

const SignIn: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <Main
        props={{
          desktopDirection: 'column'
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
};

export default SignIn;
