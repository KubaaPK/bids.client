import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
  font?: {
    size?: string;
    weight?: number;
  };
  topBottomMargin?: string;
};

const TextSeparator: React.FunctionComponent<Props> = (props: Props) => {
  const { text, font, topBottomMargin } = props;

  return (
    <S.TextSeparator
      fontSize={font && font.size !== undefined ? font.size : undefined}
      topBottomMargin={topBottomMargin}
    >
      {text}
    </S.TextSeparator>
  );
};

export default TextSeparator;
