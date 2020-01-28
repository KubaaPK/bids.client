import React from 'react';
import * as S from './styled';

type Props = {
  categoryId: string;
};

export default function FetchParameterToCategory(props: Props) {
  const { categoryId } = props;

  return (
    <S.Wrapper>
      <S.Title>Powiąż parametr</S.Title>
    </S.Wrapper>
  );
}
