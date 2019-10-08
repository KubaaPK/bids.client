import React, { useEffect } from 'react';
import StyledInput from './styled';

export type InputValue = {
  id: string;
  value: string;
};

export type InputProps = {
  type: string;
  placeholder?: string;
  id: string;
  required: boolean;
  clearable?: boolean;
  min?: number;
  max?: number;

  liftValue?: (value: InputValue) => void;
};

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const initialState: InputValue = {
    id: '',
    value: ''
  };
  const [value, setValue] = React.useState(initialState);
  const { id, placeholder, type, liftValue, required, max, min } = props;

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
      required={required}
      minLength={min}
      maxLength={max}
    />
  );
};

Input.defaultProps = {
  required: true
};

export default Input;
