import React from 'react';
import Input, { IInputProps } from '../Input/Input';
import Label, { ILabelProps } from '../Label/Label';
import InputGroupStyled from './styled';

interface IInputValue {
  id: string;
  value: string;
}

interface IProps {
  label: ILabelProps;
  input: IInputProps;

  liftInputValue: (value: IInputValue) => void;
}

const InputGroup: React.FunctionComponent<IProps> = (props: IProps) => {
  const { input, label, liftInputValue } = props;

  const liftValue = (inputVal: IInputValue) => {
    liftInputValue(inputVal);
  };

  return (
    <InputGroupStyled>
      <Label value={label.value} htmlFor={label.htmlFor} />
      <Input
        type={input.type}
        id={input.id}
        placeholder={input.placeholder}
        liftValue={liftValue}
      />
    </InputGroupStyled>
  );
};

export default InputGroup;
