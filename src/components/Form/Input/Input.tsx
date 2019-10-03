import React, { ChangeEvent, useEffect } from 'react';
import StyledInput from './styled';

interface IValue {
  id: string;
  value: string;
}

export interface IInputProps {
  type: string;
  placeholder?: string;
  id: string;

  liftValue?: (value: IValue) => void;
}

const Input: React.FunctionComponent<IInputProps> = (props: IInputProps) => {
  const initialState: IValue = {
    id: '',
    value: ''
  };
  const [value, setValue] = React.useState(initialState);
  const { id, placeholder, type, liftValue } = props;

  const handleInputChange = (val: any) => {
    setValue({
      id: val.target.id,
      value: val.target.value
    });
  };

  useEffect(() => {
    liftValue!(value);
  }, [value]);

  return (
    <StyledInput
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleInputChange(event)
      }
    />
  );
};

export default Input;
