import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import SignUpForm from './components/SignUpForm';
import Main from './styled';

const SignUp: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Navigation />
      <Main>
        <SignUpForm />
      </Main>
    </>
  );
};

export default SignUp;
