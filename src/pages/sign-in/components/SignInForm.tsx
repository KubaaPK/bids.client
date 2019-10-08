import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import InputGroup from '../../../components/Form/InputGroup/InputGroup';
import Button from '../../../components/Button/Button';
import { Form, SignInRedirect, Title } from './styled';
import { ButtonVariant } from '../../../components/Button/styled';
import { InputValue } from '../../../components/Form/Input/Input';
import { signIn, SignInCredentials } from '../../../redux/actions/auth.actions';
import { State } from '../../../redux/reducers';
import Notification, {
  NotificationVariant
} from '../../../components/Notification/Notification';
import { saveTokensToLocalStorage } from '../../../utils/jwt';

type SignUpCredentials = {
  [x: string]: string;
};

type ReduxSignInFormProps = {
  signedIn: firebase.auth.UserCredential;
  signingInError: string | undefined;
  isSigningInPending: boolean;
  isAuthenticated: boolean;
};

type ReduxSignInDispatch = {
  signIn: (credentials: SignInCredentials) => void;
};

type SignInFormProps = ReduxSignInDispatch & ReduxSignInFormProps;

const SignInForm: React.FunctionComponent<SignInFormProps> = (
  props: SignInFormProps
) => {
  const initialState: SignUpCredentials = {
    email: '',
    password: ''
  };

  const [credentials, setCredentials] = useState(initialState);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    variant: NotificationVariant.SUCCESS
  });
  const [pending, setPending] = useState(false);
  const {
    signIn: signInAction,
    signingInError,
    isSigningInPending,
    signedIn,
    isAuthenticated
  } = props;

  useEffect(() => {
    setPending(isSigningInPending);
    if (signingInError) {
      setPending(isSigningInPending);
      setNotification({
        show: true,
        variant: NotificationVariant.ERROR,
        message: signingInError
      });
    }
    if (signedIn) {
      const refreshToken: string = (signedIn.user as any).b.a;
      const accessToken: string = (signedIn.user as any).b.b;
      saveTokensToLocalStorage(accessToken, refreshToken);
    }
  }, [signingInError, signedIn, isSigningInPending]);

  const setSignInCredentials = (inputValue: InputValue) => {
    setCredentials(prevState => ({
      ...prevState,
      [inputValue.id]: inputValue.value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInAction({
      email: credentials.email,
      password: credentials.password
    });
  };

  const handleNotificationClose = (): void => {
    setNotification({
      show: false,
      variant: NotificationVariant.SUCCESS,
      message: ''
    });
  };

  return (
    <>
      {notification.show ? (
        <Notification
          variant={notification.variant}
          message={notification.message}
          timeout={6000}
          closeHandler={handleNotificationClose}
        />
      ) : null}
      {isAuthenticated ? <Redirect to="/" /> : null}
      <Title>Zaloguj się</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup
          label={{
            htmlFor: 'email',
            value: 'Adres email'
          }}
          input={{
            id: 'email',
            type: 'email',
            placeholder: 'np. jankowalski22@wp.pl',
            required: true
          }}
          liftInputValue={setSignInCredentials}
        />
        <InputGroup
          label={{
            htmlFor: 'password',
            value: 'Hasło'
          }}
          input={{
            id: 'password',
            type: 'password',
            placeholder: '********',
            required: true
          }}
          liftInputValue={setSignInCredentials}
        />
        <Button
          text="Zaloguj się"
          type="submit"
          variant={ButtonVariant.CTA}
          uppercase
          isPending={pending}
        />
      </Form>
      <SignInRedirect>
        Nie masz konta?
        <Link to="/zaloz-konto">Załóż nowe konto</Link>
      </SignInRedirect>
    </>
  );
};

const mapStateToProps = (state: State): ReduxSignInFormProps => {
  return {
    signedIn: state.auth.signedIn,
    isSigningInPending: state.auth.isSigningInPending,
    signingInError: state.auth.signingInFailed,
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps: ReduxSignInDispatch = {
  signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
