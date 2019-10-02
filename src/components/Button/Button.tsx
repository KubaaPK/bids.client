import React from 'react';
import ButtonStyled, { ButtonVariant } from './styled';

interface IProps {
  text: string;
  type: 'submit' | 'reset' | 'button';
  variant: ButtonVariant;
  uppercase?: boolean;
}

const Button: React.FunctionComponent<IProps> = (props: IProps) => {
  const { type, text, variant, uppercase } = props;

  // eslint-disable-next-line react/button-has-type
  return (
    <ButtonStyled type={type} variant={variant} uppercase={uppercase}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
