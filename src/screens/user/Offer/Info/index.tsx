import React from 'react';
import * as S from './styled';

type Props = {
  name: string;
  seller: string;
};

const Info: React.FunctionComponent<Props> = (props: Props) => {
  const { name, seller } = props;

  return (
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.Seller>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        od <S.SellerName to="/">{seller}</S.SellerName>
      </S.Seller>
    </S.Wrapper>
  );
};

export default Info;
