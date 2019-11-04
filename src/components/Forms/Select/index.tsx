import React from 'react';
import * as S from './styled';

type Props = {
  options: {
    value: any;
    text: any;
  }[];
  onChange?(props: any): void;
  defaultMessage?: string;
  id?: string;
  required?: boolean;
};

const Select: React.FunctionComponent<Props> = (props: Props) => {
  const { options, onChange, defaultMessage, id, required } = props;

  return (
    <S.Select
      onChange={onChange}
      defaultValue="disabled"
      id={id}
      required={required}
    >
      <S.Option disabled value="disabled">
        {defaultMessage || 'Wybierz opcję...'}
      </S.Option>
      {options.map((option, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.Option value={option.value} key={index}>
          {option.text}
        </S.Option>
      ))}
    </S.Select>
  );
};

export default Select;
