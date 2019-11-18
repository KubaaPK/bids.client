import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
  font?: {
    size?: string;
  };
};

const Title: React.FunctionComponent<Props> = (props: Props) => {
  const { text, font } = props;

  return <S.Title font={font}>{text}</S.Title>;
};

export default Title;
