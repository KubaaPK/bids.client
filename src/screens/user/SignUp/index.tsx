import React from 'react';
import Navigation from '../../../components/Navigation';
import SignUpForm from './SignUpForm';
import * as S from './styled';

const SignUp: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <S.Main>
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
