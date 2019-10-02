import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import SignInForm from './components/SignInForm';
import Main from './styled';

const SignIn: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <Main>
        <SignInForm />
      </Main>
    </>
  );
};

export default SignIn;
