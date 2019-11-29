import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as Form from '../../../../components/Forms';
import Button from '../../../../components/Button';
import * as S from './styled';
import * as Typography from '../../../../components/Typography';
import * as Models from '../../../../models';
import { State } from '../../../../redux/reducers';
import { signUp } from '../../../../redux/actions/accounts/sign-up.action';
import Notification from '../../../../components/Notification';

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

  const handleFormInputChange = (
    ev: React.FormEvent<HTMLInputElement>
  ): void => {
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

  const handleSignUp = (ev: React.FormEvent<HTMLFormElement>): void => {
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
      <Form.Form handleSubmit={handleSignUp}>
        <Typography.SectionTitle text="Załóż konto" bold={false} size="large" />
        <Form.Input
          id="email"
          label="Adres email"
          type="email"
          placeholder="np. jan.kowalski22@wp.pl"
          restrictions={{ required: true }}
          handleChange={handleFormInputChange}
        />
        <Form.Input
          id="username"
          label="Nazwa użytkownika"
          type="text"
          placeholder="np. jankowalski22"
          restrictions={{ required: true, minLength: 6 }}
          handleChange={handleFormInputChange}
        />
        <Form.Input
          id="password"
          label="Hasło"
          type="password"
          placeholder=""
          restrictions={{ required: true, minLength: 6 }}
          handleChange={handleFormInputChange}
        />
        <Button type="submit" text="Załóż konto" variant="full" />
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
