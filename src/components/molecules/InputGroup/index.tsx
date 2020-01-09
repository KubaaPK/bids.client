import React, { ReactElement } from 'react';
import { Label, Input } from '../../atoms';
import * as S from './styled';

type Props = {
  label: {
    text: string;
    htmlFor: string;
    font?: {
      size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    };
  };
  input: {
    id: string;
    type: 'email' | 'number' | 'text' | 'password';
    placeholder?: string;
    restrictions?: {
      required?: boolean;
      min?: number;
      max?: number;
      minLength?: number;
      maxLength?: number;
    };
    handleChange: (ev: React.FormEvent<HTMLInputElement>) => void;
    defaultValue?: any;
  };
  spacing?: string;
};

export default function InputGroup(props: Props): ReactElement {
  const { input, label, spacing } = props;

  return (
    <S.InputGroup spacing={spacing}>
      <Label text={label.text} font={label.font} htmlFor={label.htmlFor} />
      <Input
        defaultValue={input.defaultValue}
        handleChange={input.handleChange}
        id={input.id}
        placeholder={input.placeholder}
        restrictions={input.restrictions}
        type={input.type}
      />
    </S.InputGroup>
  );
}
