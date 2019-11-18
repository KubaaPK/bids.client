import React from 'react';
import * as S from './styled';

type Props = {
  handleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FunctionComponent<Props> = ({
  children,
  handleSubmit
}: any) => {
  return <S.Form onSubmit={handleSubmit}>{children}</S.Form>;
};

export default Form;
