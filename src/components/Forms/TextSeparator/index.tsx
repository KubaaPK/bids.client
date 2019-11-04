import React from 'react';
import * as S from './styled';

type Props = {
  text: any;
};

const TextSeparator: React.FunctionComponent<Props> = (props: Props) => {
  const { text } = props;

  return <S.Text>{text}</S.Text>;
};

export default TextSeparator;
