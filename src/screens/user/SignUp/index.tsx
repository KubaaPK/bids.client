import React from 'react';
import * as S from './styled';
import Navigation from '../../../components/Navigation';
import SignUpForm from './SignUpForm';
import Main from '../../../components/Layout/Main';

const SignUp: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <Main>
        <SignUpForm />
        <S.ToSignUpWrapper>
          <S.ToSignInMessage>Masz już konto?</S.ToSignInMessage>
          <S.LinkToSignIn to="/zaloguj-sie">Zaloguj się</S.LinkToSignIn>
        </S.ToSignUpWrapper>
      </Main>
    </>
  );
};

export default SignUp;
