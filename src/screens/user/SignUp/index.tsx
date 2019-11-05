import React from 'react';
import Navigation from '../../../components/Navigation';
import SignUpForm from './SignUpForm';
import * as S from './styled';
import * as Typo from '../../../components/Typography';

const SignUp: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <S.Main>
        <S.TitleWrapper>
          <Typo.Title text="Załóż konto" />
        </S.TitleWrapper>
        <SignUpForm />
        <S.ToSignUpWrapper>
          <S.ToSignInMessage>Masz już konto?</S.ToSignInMessage>
          <S.LinkToSignIn to="/zaloguj-sie">Zaloguj się</S.LinkToSignIn>
        </S.ToSignUpWrapper>
      </S.Main>
    </>
  );
};

export default SignUp;
