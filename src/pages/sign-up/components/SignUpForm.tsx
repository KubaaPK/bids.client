import React, { useEffect, useState } from 'react';
import { AjaxError } from 'rxjs/ajax';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import {
  signUp,
  SignUpCredentials
} from '../../../redux/actions/accounts.actions';
import InputGroup from '../../../components/Form/InputGroup/InputGroup';
import Button from '../../../components/Button/Button';
import Notification, {
  NotificationVariant
} from '../../../components/Notification/Notification';
import { Form, AdditionalRequirements, SignUpRedirect, Title } from './styled';
import { ButtonVariant } from '../../../components/Button/styled';
import { InputValue } from '../../../components/Form/Input/Input';

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
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    variant: NotificationVariant.SUCCESS
  });
  const [pending, setPending] = useState(false);
  const [redirectAfterSuccess, setRedirectAfterSuccess] = useState(false);
  // eslint-disable-next-line no-shadow
  const { signUp, signingUpError, isSigningUpPending, signedUp } = props;

  useEffect(() => {
    setPending(isSigningUpPending);
    if (signingUpError) {
      setNotification({
        show: true,
        variant: NotificationVariant.ERROR,
        message: signingUpError ? signingUpError.message : ''
      });
    }
    if (signedUp) {
      setNotification({
        show: true,
        variant: NotificationVariant.SUCCESS,
        message: signedUp ? 'Konto zostało założone.' : ''
      });
      setTimeout(() => {
        setRedirectAfterSuccess(true);
      }, 3000);
    }
  }, [signingUpError, signedUp, isSigningUpPending]);

  const setSignUpCredentials = (inputValue: InputValue) => {
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

  const handleNotificationClose = (): void => {
    setNotification({
      show: false,
      variant: NotificationVariant.SUCCESS,
      message: ''
    });
  };

  return (
    <>
      {redirectAfterSuccess ? <Redirect to="/zaloguj-sie" /> : null}
      {notification.show ? (
        <Notification
          variant={notification.variant}
          message={notification.message}
          timeout={6000}
          closeHandler={handleNotificationClose}
        />
      ) : null}
      <Title>Załóż konto</Title>
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
          liftInputValue={setSignUpCredentials}
        />
        <InputGroup
          label={{
            htmlFor: 'username',
            value: 'Nazwa użytkownika'
          }}
          input={{
            id: 'username',
            type: 'text',
            placeholder: 'np. janek22',
            required: true,
            min: 6
          }}
          liftInputValue={setSignUpCredentials}
        />
        <AdditionalRequirements>
          Nazwa użytkownika musi składać się z co najmniej 6 znaków
        </AdditionalRequirements>
        <InputGroup
          label={{
            htmlFor: 'password',
            value: 'Hasło'
          }}
          input={{
            id: 'password',
            type: 'password',
            placeholder: '********',
            required: true,
            min: 6
          }}
          liftInputValue={setSignUpCredentials}
        />
        <AdditionalRequirements>
          Hasło musi składać się z co najmniej 6 znaków
        </AdditionalRequirements>
        <Button
          text="Zakładam konto"
          type="submit"
          variant={ButtonVariant.CTA}
          uppercase
          isPending={pending}
        />
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
