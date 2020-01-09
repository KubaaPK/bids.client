/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { DollarSign, Tag, Package } from 'react-feather';
import * as Models from '../../../models';
import { Icon } from '../../atoms';
import * as S from './styled';
import { IconText } from '../../molecules';

type Props = {
  offer: Models.Offers.Offers['offers'][0];
};

export default function Offer(props: Props): React.ReactElement {
  const { offer } = props;

  function printStockUnit(): string {
    switch (offer.stock.unit) {
      case 'PAIR':
        return 'par(a/y)';
      case 'SET':
        return 'komplet(ów)';
      case 'UNIT':
        return 'sztuk(i)';
      default:
        return 'sztuk';
    }
  }

  return (
    <S.Offer>
      <S.LinkWrapper to={`/oferta/${offer.id}`}>
        <S.Thumbnail src={offer.images[0].url} />
        <S.Text>
          <S.Title>{offer.name}</S.Title>
          <S.OfferProperties>
            <IconText icon={<Tag />} text="sprzedaż" />
            <IconText
              icon={<DollarSign />}
              text={`${offer.sellingMode.price.amount}zł`}
            />
            <IconText
              icon={<Package />}
              text={`${offer.stock.available}${printStockUnit()}`}
            />
          </S.OfferProperties>
        </S.Text>
      </S.LinkWrapper>
    </S.Offer>
  );
}
