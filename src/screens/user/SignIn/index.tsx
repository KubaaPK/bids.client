import React from 'react';
import Navigation from '../../../components/Navigation';
import SignInForm from './SignInForm';
import * as Typo from '../../../components/Typography';
import * as S from './styled';

const SignIn: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <S.Main>
        <S.TitleWrapper>
          <Typo.Title text="Zaloguj się" />
        </S.TitleWrapper>
        <SignInForm />
        <S.ToSignUpWrapper>
          <S.ToSignUpMessage>Nie masz konta?</S.ToSignUpMessage>
          <S.LinkToSignUp to="/zaloz-konto">Zarejestruj się</S.LinkToSignUp>
        </S.ToSignUpWrapper>
      </S.Main>
    </>
  );
};

export default SignIn;
