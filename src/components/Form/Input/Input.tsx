import React from 'react';
import StyledInput from './styled';

export interface IInputProps {
  type: string;
  placeholder?: string;
  id: string;
}

const Input: React.FunctionComponent<IInputProps> = (props: IInputProps) => {
  const { id, placeholder, type } = props;

  return <StyledInput type={type} id={id} placeholder={placeholder} />;
};

export default Input;
