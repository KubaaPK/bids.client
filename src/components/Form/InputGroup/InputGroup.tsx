import React from 'react';
import Input, { IInputProps } from '../Input/Input';
import Label, { ILabelProps } from '../Label/Label';
import InputGroupStyled from './styled';

interface IProps {
  label: ILabelProps;
  input: IInputProps;
}

const InputGroup: React.FunctionComponent<IProps> = (props: IProps) => {
  const { input, label } = props;

  return (
    <InputGroupStyled>
      <Label value={label.value} htmlFor={label.htmlFor} />
      <Input type={input.type} id={input.id} placeholder={input.placeholder} />
    </InputGroupStyled>
  );
};

export default InputGroup;
