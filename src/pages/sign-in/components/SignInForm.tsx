import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../../../components/Form/InputGroup/InputGroup';
import Button from '../../../components/Button/Button';
import { Form, SignUpRedirect, Title } from './styled';
import { ButtonVariant } from '../../../components/Button/styled';

interface IInputValue {
  id: string;
  value: string;
}

interface ISignUpCredentials {
  [x: string]: string;
}

const SignInForm: React.FunctionComponent<{}> = () => {
  const initialState: ISignUpCredentials = {
    email: '',
    password: ''
  };
  const [credentials, setCredentials] = useState(initialState);

  const setSignInCredentials = (inputValue: IInputValue) => {
    setCredentials(prevState => ({
      ...prevState,
      [inputValue.id]: inputValue.value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
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
            placeholder: 'np. jankowalski22@wp.pl'
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
            placeholder: '********'
          }}
          liftInputValue={setSignInCredentials}
        />
        <Button
          text="Zaloguj się"
          type="submit"
          variant={ButtonVariant.CTA}
          uppercase
        />
        <SignUpRedirect>
          Nie masz konta?
          <Link to="/zaloz-konto">Załóż konto</Link>
        </SignUpRedirect>
      </Form>
    </>
  );
};

export default SignInForm;
