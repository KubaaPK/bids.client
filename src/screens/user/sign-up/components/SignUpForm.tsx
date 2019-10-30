import React, { useEffect, useState } from 'react';
import { AjaxError } from 'rxjs/ajax';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from '../../../../redux/reducers';
import {
  signUp,
  SignUpCredentials
} from '../../../../redux/actions/accounts.actions';
import Notification from '../../../../components/Notification';
import { Form, AdditionalRequirements, SignUpRedirect, Title } from './styled';

type ReduxSignUpFormProps = {
  signedUp: boolean;
  signingUpError: AjaxError | undefined;
  isSigningUpPending: boolean;
};

type ReduxSignUpDispatchProps = {
  signUp: (credentials: SignUpCredentials) => void;
};

type SignUpFormProps = ReduxSignUpFormProps & ReduxSignUpDispatchProps;

const SignUpForm: React.FunctionComponent<SignUpFormProps> = (
  props: SignUpFormProps
) => {
  const initialState: SignUpCredentials = {
    email: '',
    password: '',
    username: ''
  };

  const [credentials, setCredentials] = useState(initialState);

  const [pending, setPending] = useState(false);
  const [redirectAfterSuccess, setRedirectAfterSuccess] = useState(false);
  // eslint-disable-next-line no-shadow
  const { signUp, signingUpError, isSigningUpPending, signedUp } = props;

  useEffect(() => {
    setPending(isSigningUpPending);
    if (signingUpError) {
    }
    if (signedUp) {
      setTimeout(() => {
        setRedirectAfterSuccess(true);
      }, 3000);
    }
  }, [signingUpError, signedUp, isSigningUpPending]);

  const setSignUpCredentials = (inputValue: any) => {
    setCredentials(prevState => ({
      ...prevState,
      [inputValue.id]: inputValue.value,
      type: 'private'
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUp(credentials);
  };

  const handleNotificationClose = (): void => {};

  return (
    <>
      {redirectAfterSuccess ? <Redirect to="/zaloguj-sie" /> : null}

      <Title>Załóż konto</Title>
      <Form onSubmit={handleSubmit}>
        <AdditionalRequirements>
          Hasło musi składać się z co najmniej 6 znaków
        </AdditionalRequirements>
      </Form>
      <SignUpRedirect>
        Masz już konto?
        <Link to="/zaloguj-sie">Zaloguj się</Link>
      </SignUpRedirect>
    </>
  );
};

const mapStateToProps = (state: State): ReduxSignUpFormProps => {
  return {
    signedUp: state.accounts.signedUp,
    signingUpError: state.accounts.signingUpFailed,
    isSigningUpPending: state.accounts.isSigningUpPending
  };
};

const mapDispatchToProps: ReduxSignUpDispatchProps = {
  signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
