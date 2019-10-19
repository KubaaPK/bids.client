import React from 'react';
import { OfferModel } from '../../../../models/offer';
import {
  LatestOfferWrapper,
  Thumbnail,
  Text,
  Name,
  Price,
  SellingFormat,
  PriceWithDelivery,
  Currency,
  InStock
} from './styled';
import { Link } from 'react-router-dom';

type Props = {
  offer: OfferModel;
};

const LatestOffer: React.FunctionComponent<Props> = (props: Props) => {
  const { offer } = props;
  const splicedPrice = (price: string): [string, string] => {
    const splitedPrice: [string, string] = price.split('.') as [string, string];
    return splitedPrice;
  };
  const price: [string, string] = splicedPrice(offer.sellingMode.price.amount);
  const displayStockUnit = (unit: string): string => {
    if (unit === 'UNIT') {
      return 'sztuki';
    }
    return 'sztuki';
  };

  return (
    <LatestOfferWrapper to={`/oferta/${offer.id}`}>
      <Thumbnail src={offer.images[0].url} />
      <Text>
        <Name>{offer.name}</Name>
        <Price>
          {price[0]},<span>{price[1]}</span>
          <Currency>zł</Currency>
        </Price>
        <SellingFormat>
          {offer.sellingMode.format === 'BUY_NOW' ? 'sprzedaż' : 'licytacja'}
        </SellingFormat>
        <PriceWithDelivery>
          {(
            Number.parseFloat(offer.sellingMode.price.amount) +
            Number.parseFloat(offer.shippingRate.rates[0].firstItemRate.amount)
          ).toFixed(2)}
          zł z dostawą
        </PriceWithDelivery>
        <InStock>
          dostępne {offer.stock.available} {displayStockUnit(offer.stock.unit)}
        </InStock>
      </Text>
    </LatestOfferWrapper>
  );
};

export default LatestOffer;
