import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { signIn } from '../../../../redux/actions/auth/auth.actions';
import * as S from './styled';
import * as Models from '../../../../models';
import { State } from '../../../../redux/reducers';
import { saveTokensToLocalStorage } from '../../../../utils/auth';
import { InputGroup, Notification } from '../../../../components/molecules';
import { Title, Button } from '../../../../components/atoms';

type ReduxState = {
  signingIn: boolean;
  signedIn: firebase.auth.UserCredential | null;
  signingInFailed: string | undefined;
  signedUp: boolean;
};

type ReduxDispatch = {
  performSignIn: (signInCredentials: Models.Auth.SignInCredentials) => void;
};

type Props = ReduxState & ReduxDispatch;

const SignInForm: React.FunctionComponent<Props> = (props: Props) => {
  const {
    performSignIn,
    signedIn,
    signingInFailed,
    signingIn,
    signedUp
  } = props;

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
    setNotification({
      message: '',
      show: false,
      variant: 'success'
    });
  }, []);

  useEffect(() => {
    if (signedUp) {
      setNotification({
        message: 'Konto zostało założone.',
        show: true,
        variant: 'success'
      });

      setTimeout(() => {
        setNotification({
          message: '',
          show: false,
          variant: 'error'
        });
      }, 2000);
    }

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
  }, [signedIn, signingInFailed, signingIn, signedUp]);

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

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performSignIn(signInCredentials);
    clearInputs();
  };

  return (
    <S.Wrapper>
      {notification.show && (
        <Notification
          text={notification.message}
          variant={notification.variant}
        />
      )}
      {signedIn && <Redirect to="/" />}
      <S.Form onSubmit={handleSubmit}>
        <Title
          text="Zaloguj się"
          font={{
            size: 'l',
            weight: 500
          }}
        />
        <InputGroup
          spacing="1.5rem"
          label={{ text: 'Adres email', font: { size: 's' }, htmlFor: 'email' }}
          input={{
            id: 'email',
            placeholder: 'np. jan.kowalski22@wp.pl',
            restrictions: { required: true },
            type: 'text',
            handleChange: handleInputChange,
            defaultValue: signInCredentials.email
          }}
        />
        <InputGroup
          spacing="1.5rem"
          label={{ text: 'Hasło', font: { size: 's' }, htmlFor: 'password' }}
          input={{
            id: 'password',
            restrictions: { required: true },
            type: 'password',
            handleChange: handleInputChange
          }}
        />
        <Button type="submit" variant="full" text="Zaloguj się" />
      </S.Form>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    signingIn: state.auth.signingIn,
    signedIn: state.auth.signedIn,
    signingInFailed: state.auth.signingInFailed,
    signedUp: state.accounts.signUp.signedUp
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignIn: signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
