import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
  htmlFor: string;
};

const Label: React.FunctionComponent<Props> = (props: Props) => {
  const { text, htmlFor } = props;

  return <S.Label htmlFor={htmlFor}>{text}</S.Label>;
};

export default Label;
