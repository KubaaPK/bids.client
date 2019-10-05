import React from 'react';
import Input, { InputProps, InputValue } from '../Input/Input';
import Label, { LabelProps } from '../Label/Label';
import InputGroupStyled from './styled';

type InputGroupProps = {
  label: LabelProps;
  input: InputProps;

  liftInputValue: (value: InputValue) => void;
};

const InputGroup: React.FunctionComponent<InputGroupProps> = (
  props: InputGroupProps
) => {
  const { input, label, liftInputValue } = props;

  const liftValue = (inputVal: InputValue) => {
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
        required={input.required}
        max={input.max}
        min={input.min}
      />
    </InputGroupStyled>
  );
};

export default InputGroup;
