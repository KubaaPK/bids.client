import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { signIn } from '../../../../redux/actions/auth/auth.actions';
import * as Form from '../../../../components/Forms';
import Button from '../../../../components/Button';
import * as Typography from '../../../../components/Typography';
import Notification from '../../../../components/Notification';
import * as S from './styled';
import * as Models from '../../../../models';
import { State } from '../../../../redux/reducers';
import { saveTokensToLocalStorage } from '../../../../utils/auth';

type ReduxState = {
  signingIn: boolean;
  signedIn: firebase.auth.UserCredential | null;
  signingInFailed: string | undefined;
};

type ReduxDispatch = {
  performSignIn: (signInCredentials: Models.Auth.SignInCredentials) => void;
};

type Props = ReduxState & ReduxDispatch;

const SignInForm: React.FunctionComponent<Props> = (props: Props) => {
  const { performSignIn, signedIn, signingInFailed, signingIn } = props;

  const [signInCredentials, setSignInCredentials] = useState<
    Models.Auth.SignInCredentials
  >({
    email: '',
    password: ''
  });

  const [notification, setNotification] = useState<
    Models.Notification.NotificationProperties
  >({
    show: false,
    message: '',
    variant: 'success'
  });

  useEffect(() => {
    if (signedIn) {
      saveTokensToLocalStorage(
        (signedIn.user! as any).ma,
        signedIn.user!.refreshToken
      );
    }

    if (signingInFailed) {
      setNotification({
        message: signingInFailed,
        show: true,
        variant: 'error'
      });

      setTimeout(() => {
        setNotification({
          message: '',
          show: false,
          variant: 'error'
        });
      }, 2000);
    }
  }, [signedIn, signingInFailed, signingIn]);

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setSignInCredentials({
      ...signInCredentials,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  };

  const clearInputs = (): void => {
    setSignInCredentials({
      email: '',
      password: ''
    });
  };

  const handleSignIn = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performSignIn(signInCredentials);
    clearInputs();
  };

  return (
    <S.Wrapper>
      {notification.show && (
        <Notification
          message={notification.message}
          variant={notification.variant}
        />
      )}
      {signedIn && <Redirect to="/" />}
      <Form.Form handleSubmit={handleSignIn}>
        <Typography.Title text="Zaloguj się" />
        <Form.Input
          type="email"
          id="email"
          placeholder="np. jan.kowalski22@wp.pl"
          label="Adres email"
          handleChange={handleInputChange}
          restrictions={{
            required: true
          }}
        />
        <Form.Input
          type="password"
          id="password"
          label="Hasło"
          handleChange={handleInputChange}
          restrictions={{
            required: true
          }}
        />
        <Button type="submit" variant="full" text="Zaloguj się" />
      </Form.Form>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    signingIn: state.auth.signingIn,
    signedIn: state.auth.signedIn,
    signingInFailed: state.auth.signingInFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignIn: signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
