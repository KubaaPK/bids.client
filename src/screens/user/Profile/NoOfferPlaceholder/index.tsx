import React from 'react';
import * as S from './styled';

type Props = {
  text: string;
};

const NoOfferPlaceholder: React.FunctionComponent<Props> = (props: Props) => {
  const { text } = props;

  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default NoOfferPlaceholder;
