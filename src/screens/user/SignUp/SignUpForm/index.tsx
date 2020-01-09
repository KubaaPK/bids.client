import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as S from './styled';
import * as Models from '../../../../models';
import { State } from '../../../../redux/reducers';
import { signUp } from '../../../../redux/actions/accounts/sign-up.action';
import { Title } from '../../../../components/atoms';
import { InputGroup, Notification } from '../../../../components/molecules';
import { Button } from '../../../../ui/atoms';
import { Field } from '../../../../ui/molecules';

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
    setNotification({
      message: '',
      show: false,
      variant: 'error'
    });
  }, []);

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

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    performSignUp(signUpCredentials);
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
      <S.Form onSubmit={handleSubmit}>
        <Title
          text="Załóż konto"
          font={{
            size: 'l',
            weight: 500
          }}
        />
        <Field
          label="Adres email"
          input={{
            id: 'email',
            placeholder: 'np. jan.kowalski22@wp.pl',
            type: 'email'
          }}
        />
        {/* <InputGroup
          spacing="1.5rem"
          label={{ text: 'Adres email', font: { size: 's' }, htmlFor: 'email' }}
          input={{
            id: 'email',
            placeholder: 'np. jan.kowalski22@wp.pl',
            restrictions: { required: true, minLength: 6 },
            type: 'text',
            handleChange: handleInputChange
          }}
        /> */}
        <InputGroup
          spacing="1.5rem"
          label={{
            text: 'Nazwa użytkownika',
            font: { size: 's' },
            htmlFor: 'username'
          }}
          input={{
            id: 'username',
            placeholder: 'np. jankowalski22',
            restrictions: { required: true, minLength: 6 },
            type: 'text',
            handleChange: handleInputChange
          }}
        />
        <InputGroup
          spacing="1.5rem"
          label={{ text: 'Hasło', font: { size: 's' }, htmlFor: 'password' }}
          input={{
            id: 'password',
            restrictions: { required: true, minLength: 6 },
            type: 'password',
            handleChange: handleInputChange
          }}
        />
        <Button type="submit" kind="full" variant="default" />
      </S.Form>
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
