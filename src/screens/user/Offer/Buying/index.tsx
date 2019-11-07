import React, { useState } from 'react';
import * as S from './styled';
import * as Form from '../../../../components/Forms';

type Props = {
  remainItemsInStock: number;
};

const Buying: React.FunctionComponent<Props> = (props: Props) => {
  const { remainItemsInStock } = props;
  const [numberOfItemsToBuy, setNumberOfItemsToBuy] = useState<number>(1);

  const changeItemsToBuy = (num: number) => {
    if (
      (num === -1 && numberOfItemsToBuy > 1) ||
      (num === 1 && numberOfItemsToBuy < remainItemsInStock)
    ) {
      setNumberOfItemsToBuy(numberOfItemsToBuy + num);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>Wybierz liczbę sztuk</S.Title>
      <S.Form>
        <S.ChangeNumberOfItemsButton
          type="button"
          onClick={() => changeItemsToBuy(-1)}
        >
          -
        </S.ChangeNumberOfItemsButton>
        <S.StockInput
          type="number"
          value={numberOfItemsToBuy}
          min={1}
          max={remainItemsInStock}
          readOnly
        />
        <S.ChangeNumberOfItemsButton
          type="button"
          onClick={() => changeItemsToBuy(1)}
        >
          +
        </S.ChangeNumberOfItemsButton>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <S.InStock>z {remainItemsInStock} dostępnych</S.InStock>
        <Form.Button variant="full" type="submit" text="Kup" />
      </S.Form>
    </S.Wrapper>
  );
};

export default Buying;
