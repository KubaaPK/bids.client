import React, { ReactElement, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as firebase from 'firebase';
import * as S from './styled';
import * as Models from '../../../models';
import { Button, Heading, Link } from '../../atoms';
import { Field } from '../../molecules';
import { Notification } from '..';
import { saveTokensToLocalStorage } from '../../../utils/auth';

type Props = {
  signIn: (credentials: Models.Auth.SignInCredentials) => void;
  signingInFailed: string | undefined;
  signedIn: firebase.auth.UserCredential | null;
};

export default function SignInForm(props: Props): ReactElement {
  const { signIn, signingInFailed, signedIn } = props;
  const { push } = useHistory();

  const [notification, setNotification] = useState<{
    type: 'error';
    text: string;
    show: boolean;
  }>({
    text: '',
    type: 'error',
    show: false
  });

  const [credentials, setCredentials] = useState<Models.Auth.SignInCredentials>(
    {
      email: '',
      password: ''
    }
  );

  useEffect(() => {
    if (signingInFailed) {
      setNotification({
        type: 'error',
        show: true,
        text: signingInFailed
      });
    }

    if (signedIn) {
      setNotification({
        type: 'error',
        show: false,
        text: ''
      });

      saveTokensToLocalStorage(
        (signedIn.user! as any).ma,
        signedIn.user!.refreshToken
      );

      push('/');
    }
  }, [signingInFailed, signedIn, push]);

  function handleInputChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setCredentials({
      ...credentials,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  }

  function clearInputs(): void {
    setCredentials({
      email: '',
      password: ''
    });
  }

  function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    clearInputs();
    signIn(credentials);
  }

  return (
    <>
      {notification.show && (
        <Notification
          type={notification.type}
          text={notification.text}
          closable
          close={
            () =>
              setNotification({
                ...notification,
                show: false
              })
            // eslint-disable-next-line react/jsx-curly-newline
          }
          closeTimeout={3500}
        />
      )}
      <S.Form onSubmit={handleFormSubmit}>
        <Heading level={2} text="Zaloguj się" />
        <Field
          label="Adres email"
          input={{
            id: 'email',
            type: 'email',
            placeholder: 'np. jan.kowalski22@wp.pl',
            onChange: handleInputChange,
            value: credentials.email,
            restrictions: {
              required: true
            }
          }}
        />
        <Field
          label="Hasło"
          input={{
            id: 'password',
            type: 'password',
            onChange: handleInputChange,
            value: credentials.password,
            restrictions: {
              required: true
            }
          }}
        />
        <Button kind="full" type="submit" variant="default">
          Zaloguj się
        </Button>
      </S.Form>
      <S.RedirectWrapper>
        <Link to="/zaloz-konto">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Nie masz konta? <span>Założ konto</span>
        </Link>
      </S.RedirectWrapper>
    </>
  );
}
