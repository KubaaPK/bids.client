import React from 'react';
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
};

const Select: React.FunctionComponent<Props> = (props: Props) => {
  const {
    id,
    label,
    options,
    defaultSelectValue,
    handleChange,
    restrictions
  } = props;

  return (
    <S.SelectWrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Select
        onChange={handleChange}
        defaultValue={defaultSelectValue}
        id={id}
        required={restrictions && restrictions.required}
      >
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
    </S.SelectWrapper>
  );
};

export default Select;
