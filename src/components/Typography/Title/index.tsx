import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
  style?: React.CSSProperties;
};

const Title: React.FunctionComponent<Props> = (props: Props) => {
  const { text, style } = props;

  return <S.Title style={style}>{text}</S.Title>;
};

export default Title;
