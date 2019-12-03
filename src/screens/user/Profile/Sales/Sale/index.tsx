import React, { useState } from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-unresolved
import 'moment/locale/pl';
import * as Models from '../../../../../models';
import * as S from './styled';

type Props = {
  sale: Models.Sales.Sale;
};

const Sale: React.FunctionComponent<Props> = (props: Props) => {
  const { sale } = props;
  const [showRelativeTime, setShowRelativeTime] = useState<boolean>(false);

  const onCreatedAtMouseOver = (): void => {
    setShowRelativeTime(true);
  };

  const onCreatedAtMouseOut = (): void => {
    setShowRelativeTime(false);
  };

  return (
    <S.Sale>
      <S.Top>
        <S.Buyer to="/">
          {sale.purchase.buyer.username
            ? sale.purchase.buyer.username
            : 'username'}
        </S.Buyer>
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <S.CreatedAt
          onMouseOver={onCreatedAtMouseOver}
          onMouseOut={onCreatedAtMouseOut}
        >
          {showRelativeTime
            ? moment(sale.createdAt).fromNow()
            : moment(sale.createdAt).format('D MMM YYYY  \xa0 h:m')}
        </S.CreatedAt>
      </S.Top>
      <S.Thumbnail src={sale.purchase.offer.images[0]} />
      <S.Text>
        <S.Title>{sale.purchase.offer.name}</S.Title>
        <S.Price>
          {Number.parseFloat(
            sale.purchase.offer.sellingMode.price.amount
          ).toFixed(2)}
          zł
        </S.Price>
      </S.Text>
    </S.Sale>
  );
};

export default Sale;
