import React from 'react';
import * as Models from '../../../models';
import * as S from './styled';
import * as PriceUtils from '../../../utils/price';

type Props = {
  offer: Models.Offers.Offer;
};

const Offer: React.FunctionComponent<Props> = (props: Props) => {
  const { offer } = props;

  const price: [string, string] = PriceUtils.tupledMainAndPennies(
    offer.sellingMode.price.amount
  );

  return (
    <S.Offer to={`/oferta/${offer.id}`}>
      <S.Thumbnail src={offer.images[0].url} />
      <S.Text>
        <S.Title>{offer.name}</S.Title>
        <S.Price>
          <S.MainPart>{price[0]}</S.MainPart>
          <S.CommaSeparator>,</S.CommaSeparator>
          <S.Pennies>
            {price[1]}
            {offer.sellingMode.price.currency === 'PLN' ? 'zł' : 'zł'}
          </S.Pennies>
        </S.Price>
        <S.SellingMode>
          {offer.sellingMode.format === 'BUY_NOW' ? 'sprzedaż' : 'sprzedaż'}
        </S.SellingMode>
        <S.WithDeliveryPrice>
          z dostawą od
          <span>
            {PriceUtils.calulatePriceWithShipping(
              offer.sellingMode.price.amount,
              offer.shippingRate.rates[0].firstItemRate.amount
            )}
          </span>
          zł
        </S.WithDeliveryPrice>
      </S.Text>
    </S.Offer>
  );
};

export default Offer;
