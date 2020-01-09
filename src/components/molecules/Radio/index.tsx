import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  defaultCheckedLabel?: string;
  options: { id: string; value: any; label: string }[];
  handleChange: (ev: React.FormEvent<HTMLInputElement>) => void;
};

export default function Radio(props: Props): ReactElement {
  const { options, defaultCheckedLabel, handleChange } = props;

  return (
    <S.RadioWrapper>
      {options.map(option => (
        <div key={option.id}>
          <S.Radio
            type="radio"
            id={option.id}
            value={option.value}
            name="radio"
            defaultChecked={
              defaultCheckedLabel !== undefined &&
              option.label === defaultCheckedLabel
            }
            onChange={handleChange}
          />
          <S.Label htmlFor={option.id} key={option.label}>
            {option.label}
          </S.Label>
        </div>
      ))}
    </S.RadioWrapper>
  );
}
