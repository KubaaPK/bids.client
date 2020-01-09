import React, { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
  htmlFor: string;
  font?: {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  };
};

export default function Label(props: Props): ReactElement {
  const { font, text, htmlFor } = props;

  return (
    <S.Label font={font} htmlFor={htmlFor}>
      {text}
    </S.Label>
  );
}
