// @ts-ignore
import React from 'react';
import * as S from './styled';
import { Label } from '../../atoms';

type Props = {
  id: string;
  label: string;
  options: { value: any; label: string }[];
  defaultSelectValue?: string;
  onChange: (ev: React.FormEvent<HTMLSelectElement>) => void;
  restrictions?: {
    required?: boolean;
  };
  defaultMessage?: string;
};

export default function Select(props: Props): React.ReactElement {
  const {
    defaultMessage,
    defaultSelectValue,
    id,
    label,
    onChange,
    options,
    restrictions
  } = props;

  return (
    <S.Wrapper>
      <Label text={label} htmlFor={id} />
      <S.Select
        onChange={onChange}
        defaultValue={defaultSelectValue || defaultMessage}
        id={id}
        required={restrictions && restrictions.required}
      >
        {defaultMessage && (
          <option value={defaultMessage} disabled>
            {defaultMessage}
          </option>
        )}
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
    </S.Wrapper>
  );
}
