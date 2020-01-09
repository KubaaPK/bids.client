import React from 'react';
import { useHistory } from 'react-router-dom';
import { AjaxError } from 'rxjs/ajax';
import * as S from './styled';
import * as Models from '../../../models';
import { Button, Heading, Link } from '../../atoms';
import { Field } from '../../molecules';
import { Notification } from '..';

type Props = {
  signUp: (credentials: Models.Auth.SignUpCredentials) => void;
  signedUp: boolean;
  signingUpFailed: AjaxError | undefined;
};

export default function SignUpForm(props: Props): React.ReactElement {
  const { signUp, signedUp, signingUpFailed } = props;

  const [credentials, setCredentials] = React.useState<
    Models.Auth.SignUpCredentials
  >({
    email: '',
    password: '',
    username: '',
    type: 'private'
  });

  const [notification, setNotification] = React.useState<{
    type: 'error';
    text: string;
    show: boolean;
  }>({
    text: '',
    type: 'error',
    show: false
  });

  const { push } = useHistory();
  React.useEffect(() => {
    if (signedUp) {
      push('/zaloguj-sie');
    }

    if (signingUpFailed) {
      setCredentials({
        email: '',
        password: '',
        type: 'private',
        username: ''
      });

      setNotification({
        show: true,
        type: 'error',
        text: signingUpFailed.response
      });

      setTimeout(() => {
        setNotification({
          show: false,
          type: 'error',
          text: ''
        });
      }, 3000);
    }
  }, [signedUp, signingUpFailed, push]);

  function handleInputChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setCredentials({
      ...credentials,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    signUp(credentials);
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
        />
      )}
      <S.Form onSubmit={handleSubmit}>
        <Heading level={2} text="Załóż konto" />
        <Field
          label="Adres email"
          input={{
            id: 'email',
            type: 'email',
            placeholder: 'np. jan.kowalski22@wp.pl',
            onChange: handleInputChange,
            value: credentials.email
          }}
        />
        <Field
          label="Nazwa użytkownika"
          input={{
            id: 'username',
            type: 'text',
            placeholder: 'np. jankowalski22',
            onChange: handleInputChange,
            value: credentials.username
          }}
        />
        <Field
          label="Hasło"
          input={{
            id: 'password',
            type: 'password',
            onChange: handleInputChange,
            value: credentials.password
          }}
        />
        <Button kind="full" type="submit" variant="default">
          Założ konto
        </Button>
      </S.Form>
      <S.RedirectWrapper>
        <Link to="/zaloguj-sie">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          Masz już konto? <span>Zaloguj się</span>
        </Link>
      </S.RedirectWrapper>
    </>
  );
}
