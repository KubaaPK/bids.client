import React, { useState, useEffect } from 'react';
import * as Models from '../../models';
import * as S from './styled';
import { API_URL } from '../../consts';
import Offer from './Offer';

type Props = {
  limit?: number;
  offset?: number;
  order?: string;
  sellerId?: string;
  categoryId?: string;
};

const Offers: React.FunctionComponent<Props> = (props: Props) => {
  const { categoryId, limit, offset, order, sellerId } = props;
  const [offers, setOffers] = useState<Models.Offers.Offer[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/sale/offers`)
      .then(res => res.json())
      .then((response: Response) => {
        setOffers((response as unknown) as Models.Offers.Offer[]);
      });
  }, []);

  return (
    <S.Wrapper>
      {offers.map(offer => (
        <Offer offer={offer} key={offer.id} />
      ))}
    </S.Wrapper>
  );
};

export default Offers;
