import React from 'react';
import { ClipLoader } from 'react-spinners';
import ButtonStyled, { ButtonVariant } from './styled';

type ButtonProps = {
  text: string;
  type: 'submit' | 'reset' | 'button';
  variant: ButtonVariant;
  uppercase?: boolean;
  isPending?: boolean;
};

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { type, text, variant, uppercase, isPending } = props;

  // eslint-disable-next-line react/button-has-type
  return (
    <ButtonStyled
      type={type}
      variant={variant}
      uppercase={uppercase}
      pending={!isPending}
      disabled={isPending}
    >
      {isPending ? <ClipLoader size={16} color="#ffffff" /> : text}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  isPending: false
};

export default Button;
