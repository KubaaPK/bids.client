import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../../../components/Form/InputGroup/InputGroup';
import Button from '../../../components/Button/Button';
import { Form, SignInRedirect, Title } from './styled';
import { ButtonVariant } from '../../../components/Button/styled';

const SignUpForm: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Title>Załóż konto</Title>
      <Form>
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
        />
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
