import React from 'react';
import * as S from './styled';

type Props = {
  defaultCheckedLabel?: string;
  options: { id: string; value: any; label: string }[];
  handleChange: (ev: React.FormEvent<HTMLInputElement>) => void;
};

const Radio: React.FunctionComponent<Props> = (props: Props) => {
  const { options, defaultCheckedLabel, handleChange } = props;

  return (
    <S.RadioWrapper>
      {options.map(option => (
        <>
          <S.Radio
            type="radio"
            id={option.id}
            value={option.value}
            name="radio"
            defaultChecked={
              defaultCheckedLabel !== undefined &&
              option.label === defaultCheckedLabel
            }
            key={option.id}
            onChange={handleChange}
          />
          <S.Label htmlFor={option.id} key={option.label}>
            {option.label}
          </S.Label>
        </>
      ))}
    </S.RadioWrapper>
  );
};

export default Radio;
