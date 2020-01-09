import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  id: string;
  label: string;
  options: { value: any; label: string }[];
  defaultSelectValue?: string;
  handleChange: (ev: React.FormEvent<HTMLSelectElement>) => void;
  restrictions?: {
    required?: boolean;
  };
  defaultMessage?: string;
};

export default function Select(props: Props): ReactElement {
  const {
    id,
    label,
    options,
    defaultSelectValue,
    handleChange,
    restrictions,
    defaultMessage
  } = props;

  return (
    <S.SelectWrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Select
        onChange={handleChange}
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
    </S.SelectWrapper>
  );
}
