import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
  font?: {
    size?: string;
  };
  marginFromLeft?: boolean;
};

const Title: React.FunctionComponent<Props> = (props: Props) => {
  const { text, font, marginFromLeft } = props;

  return (
    <S.Title font={font} marginFromLeft={marginFromLeft}>
      {text}
    </S.Title>
  );
};

export default Title;
