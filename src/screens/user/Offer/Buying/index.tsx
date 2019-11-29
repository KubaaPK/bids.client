import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import * as Models from '../../../../models';
import Button from '../../../../components/Button';

type Props = {
  offer: Models.Offers.SingleOffer;
};

const Buying: React.FunctionComponent<Props> = (props: Props) => {
  const { offer } = props;
  const [numberOfItemsToBuy, setNumberOfItemsToBuy] = useState<number>(1);

  const changeItemsToBuy = (num: number) => {
    if (
      (num === -1 && numberOfItemsToBuy > 1) ||
      (num === 1 && numberOfItemsToBuy < offer.stock.available)
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
          max={offer.stock.available}
          readOnly
        />
        <S.ChangeNumberOfItemsButton
          type="button"
          onClick={() => changeItemsToBuy(1)}
        >
          +
        </S.ChangeNumberOfItemsButton>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <S.InStock>z {offer.stock.available} dostępnych</S.InStock>
        <Link
          to={{
            pathname: '/potwierdzenie-zakupu',
            state: {
              offer,
              amount: numberOfItemsToBuy
            }
          }}
        >
          <Button variant="full" type="submit" text="Kup" />
        </Link>
      </S.Form>
    </S.Wrapper>
  );
};

export default Buying;
