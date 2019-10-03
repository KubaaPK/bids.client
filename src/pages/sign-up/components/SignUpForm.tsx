import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../../../components/Form/InputGroup/InputGroup';
import Button from '../../../components/Button/Button';
import { Form, SignInRedirect, Title, PasswordRequirements } from './styled';
import { ButtonVariant } from '../../../components/Button/styled';

interface IInputValue {
  id: string;
  value: string;
}

interface ISignUpCredentials {
  [x: string]: string;
}

const SignUpForm: React.FunctionComponent<{}> = () => {
  const initialState: ISignUpCredentials = {
    email: '',
    password: '',
    username: ''
  };
  const [credentials, setCredentials] = useState(initialState);

  const setSignUpCredentials = (inputValue: IInputValue) => {
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
            placeholder: 'np. jankowalski22@wp.pl'
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
            placeholder: 'np. janek22'
          }}
          liftInputValue={setSignUpCredentials}
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
          liftInputValue={setSignUpCredentials}
        />
        <PasswordRequirements>
          Hasło musi składać się z co najmniej 6 znaków
        </PasswordRequirements>
        <Button
          text="Zakładam konto"
          type="submit"
          variant={ButtonVariant.CTA}
          uppercase
        />
        <SignInRedirect>
          Masz już konto?
          <Link to="/zaloguj-sie">Zaloguj się</Link>
        </SignInRedirect>
      </Form>
    </>
  );
};

export default SignUpForm;
