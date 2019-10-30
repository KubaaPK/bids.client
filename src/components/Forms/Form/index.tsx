import React from 'react';
import * as S from './styled';

type Props = {
  onSubmit(props: any): void;
};

// eslint-disable-next-line react/prop-types
const Form: React.FunctionComponent<Props> = ({ children, onSubmit }) => {
  return <S.Form onSubmit={onSubmit}>{children}</S.Form>;
};

export default Form;
