import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as Form from '../../../../../components/Forms';
import * as S from './styled';
import * as Models from '../../../../../models';
import { State } from '../../../../../redux/reducers';
import { signUp } from '../../../../../redux/actions/accounts/sign-up.action';
import Notification from '../../../../../components/Notification';

type ReduxState = {
  signingUp: boolean;
  signingUpFailed: AjaxError;
  signedUp: boolean;
};

type ReduxDispatch = {
  performSignUp(signUpCredentials: Models.Auth.SignUpCredentials): void;
};

type Props = ReduxState & ReduxDispatch;

const SignUpForm: React.FunctionComponent<Props> = (props: Props) => {
  const { performSignUp, signedUp, signingUp, signingUpFailed } = props;
  const { push } = useHistory();
  const [signUpCredentials, setSignUpCredentials] = useState<
    Models.Auth.SignUpCredentials
  >({
    username: '',
    email: '',
    password: '',
    type: 'private'
  });

  const [notification, setNotification] = useState<
    Models.Notification.NotificationProperties
  >({
    show: false,
    message: '',
    variant: 'error'
  });

  useEffect(() => {
    if (signedUp) {
      push('/zaloguj-sie');
    }

    if (signingUpFailed) {
      setNotification({
        message: signingUpFailed.message,
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
  }, [signingUp, signedUp, signingUpFailed, push]);

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setSignUpCredentials({
      ...signUpCredentials,
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  };

  const clearInputs = (): void => {
    setSignUpCredentials({
      email: '',
      password: '',
      username: '',
      type: 'private'
    });
  };

  const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performSignUp(signUpCredentials);
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
      <Form.Form onSubmit={handleFormSubmit}>
        <Form.InputGroup>
          <Form.Label text="Adres email" htmlFor="email" />
          <Form.Input
            variant="email"
            id="email"
            required
            onChange={handleInputChange}
            value={signUpCredentials.email}
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.Label text="Nazwa użytkownika" htmlFor="username" />
          <Form.Input
            variant="text"
            id="username"
            required
            min={6}
            onChange={handleInputChange}
            value={signUpCredentials.username}
          />
        </Form.InputGroup>
        <Form.InputGroup>
          <Form.Label text="Hasło" htmlFor="password" />
          <Form.Input
            variant="password"
            id="password"
            required
            min={6}
            onChange={handleInputChange}
            value={signUpCredentials.password}
          />
        </Form.InputGroup>
        <Form.Button
          variant="full"
          type="submit"
          text="Załóż konto"
          isPending={signingUp}
        />
      </Form.Form>
    </S.Wrapper>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    signingUp: state.accounts.signUp.signingUp,
    signedUp: state.accounts.signUp.signedUp,
    signingUpFailed: state.accounts.signUp.signingUpFailed!
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performSignUp: signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
