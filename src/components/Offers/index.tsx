import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as Models from '../../models';
import * as S from './styled';
import { API_URL } from '../../consts';
import Offer from './Offer';

const Offers: React.FunctionComponent<{}> = () => {
  const [offers, setOffers] = useState<Models.Offers.Offer[]>([]);
  const location = useLocation<any>();

  useEffect(() => {
    fetch(`${API_URL}/sale/offers${location.search}`)
      .then(res => res.json())
      .then((response: Response) => {
        setOffers((response as unknown) as Models.Offers.Offer[]);
      });
  }, [location.search]);

  return (
    <S.Wrapper>
      {offers.map(offer => (
        <Offer offer={offer} key={offer.id} />
      ))}
    </S.Wrapper>
  );
};

export default Offers;
