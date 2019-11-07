import React from 'react';
import * as S from './styled';
import { tupledMainAndPennies } from '../../../../utils/price';

type Props = {
  price: string;
};

const Price: React.FunctionComponent<Props> = (props: Props) => {
  const { price } = props;
  const tupledPrice: [string, string] = tupledMainAndPennies(price);

  return (
    <S.Wrapper>
      <S.Price>
        <S.MainPrice>{tupledPrice[0]}</S.MainPrice>
        <S.CommaSeparator>,</S.CommaSeparator>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <S.Pennies>{tupledPrice[1]}zł</S.Pennies>
      </S.Price>
    </S.Wrapper>
  );
};

export default Price;
