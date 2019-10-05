import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../../../components/Form/InputGroup/InputGroup';
import Button from '../../../components/Button/Button';
import { Form, SignInRedirect, Title } from './styled';
import { ButtonVariant } from '../../../components/Button/styled';
import { InputValue } from '../../../components/Form/Input/Input';

type SignUpCredentials = {
  [x: string]: string;
};

const SignInForm: React.FunctionComponent<{}> = () => {
  const initialState: SignUpCredentials = {
    email: '',
    password: ''
  };
  const [credentials, setCredentials] = useState(initialState);

  const setSignInCredentials = (inputValue: InputValue) => {
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
        />
      </Form>
      <SignInRedirect>
        Nie masz konta?
        <Link to="/zaloz-konto">Załóż nowe konto</Link>
      </SignInRedirect>
    </>
  );
};

export default SignInForm;
