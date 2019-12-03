import React, { useState } from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-unresolved
import 'moment/locale/pl';
import * as Models from '../../../../../models';
import * as S from './styled';

type Props = {
  buying: Models.Purchases.Purchase;
};

const Buying: React.FunctionComponent<Props> = (props: Props) => {
  const { buying } = props;
  const [showRelativeTime, setShowRelativeTime] = useState<boolean>(false);

  const onCreatedAtMouseOver = (): void => {
    setShowRelativeTime(true);
  };

  const onCreatedAtMouseOut = (): void => {
    setShowRelativeTime(false);
  };

  return (
    <S.Buying>
      <S.Top>
        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
        <S.CreatedAt
          onMouseOver={onCreatedAtMouseOver}
          onMouseOut={onCreatedAtMouseOut}
        >
          {showRelativeTime
            ? moment(buying.createdAt).fromNow()
            : moment(buying.createdAt).format('D MMM YYYY  \xa0 h:m')}
        </S.CreatedAt>
      </S.Top>
      <S.Thumbnail src={buying.offer.images[0].url} />
      <S.Text>
        <S.Title>{buying.offer.name}</S.Title>
        <S.Price>
          {Number.parseFloat(buying.offer.sellingMode.price.amount).toFixed(2)}
          zł
        </S.Price>
      </S.Text>
    </S.Buying>
  );
};

export default Buying;
