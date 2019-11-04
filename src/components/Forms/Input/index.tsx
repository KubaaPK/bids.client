import React, { useState } from 'react';
import * as S from './styled';

type Props = {
  variant: 'password' | 'text' | 'email' | 'number';
  id: string;
  onChange?(props: any): void;
  value?: any;
  required?: boolean;
  min?: number;
  max?: number;
};

const Input: React.FunctionComponent<Props> = (props: Props) => {
  const { variant, id, onChange, value, required, min, max } = props;
  const [revealPassword, setPasswordReveal] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Input
        type={variant}
        id={id}
        onChange={onChange}
        value={value}
        required={required}
        minLength={min}
        maxLength={max}
      />
      {variant === 'password' ? (
        <>
          {revealPassword ? (
            <S.ShowPassword
              size="2rem"
              onClick={() => setPasswordReveal(!revealPassword)}
            />
          ) : (
            <S.HidePassword
              size="2rem"
              onClick={() => setPasswordReveal(!revealPassword)}
            />
          )}
        </>
      ) : null}
    </S.Wrapper>
  );
};

export default Input;
