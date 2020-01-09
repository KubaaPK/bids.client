import React, { ReactElement } from 'react';
import * as S from './styled';
import { Input, Label } from '../../atoms';

type Props = {
  label: string;
  input: {
    id: string;
    type: 'text' | 'number' | 'textarea' | 'password' | 'email';
    onChange?: (
      ev:
        | React.FormEvent<HTMLInputElement>
        | React.FormEvent<HTMLTextAreaElement>
    ) => void;
    placeholder?: string;
    restrictions?: {
      required?: boolean;
      min?: number;
      max?: number;
      minLength?: number;
      maxLength?: number;
    };
    defaultValue?: string;
    value?: string;
    step?: string;
  };
};

export default function Field(props: Props): ReactElement {
  const { label, input } = props;

  return (
    <S.Field>
      <Label text={label} htmlFor={input.id} />
      <Input
        onChange={input.onChange}
        placeholder={input.placeholder}
        type={input.type}
        id={input.id}
        defaultValue={input.defaultValue}
        value={input.value}
        restrictions={input.restrictions}
        step={input.step}
      />
    </S.Field>
  );
}
