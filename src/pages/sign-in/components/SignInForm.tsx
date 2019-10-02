import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../../../components/Form/InputGroup/InputGroup';
import Button from '../../../components/Button/Button';
import { Form, SignUpRedirect, Title } from './styled';
import { ButtonVariant } from '../../../components/Button/styled';

const SignInForm: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Title>Zaloguj się</Title>
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
