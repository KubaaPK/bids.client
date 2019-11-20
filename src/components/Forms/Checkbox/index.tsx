import React from 'react';
import * as S from './styled';

type Props = {
  label: string;
  subLabel?: string;
  restrictions?: {
    required?: boolean;
  };
  checked?: boolean;
  handleChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FunctionComponent<Props> = (props: Props) => {
  const { label, subLabel, restrictions, checked, handleChange } = props;

  return (
    <S.Wrapper>
      <S.Checkbox
        type="checkbox"
        required={restrictions && restrictions.required}
        defaultChecked={checked}
        onChange={handleChange}
      />
      <S.CheckMark />
      <S.LabelText>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {label} <br /> <span>{subLabel}</span>
      </S.LabelText>
    </S.Wrapper>
  );
};

export default Checkbox;
