import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as Models from '../../models';
import * as S from './styled';
import { API_URL } from '../../consts';
import Offer from './Offer';
import OffersListSettings from './OffersListSettings';

const Offers: React.FunctionComponent<{}> = () => {
  const [offers, setOffers] = useState<Models.Offers.Offer[]>([]);
  const [offerListDisplayType, setOfferListDisplayType] = useState<
    'grid' | 'list'
  >(localStorage.getItem('offer-list-display-style') as 'list' | 'grid');
  const [sortOptions, setSortOptions] = useState<{
    order?: 'DESC' | 'ASC';
  }>();
  const location = useLocation<any>();

  useEffect(() => {
    fetch(`${API_URL}/sale/offers${location.search}`)
      .then(res => res.json())
      .then((response: Response) => {
        setOffers((response as unknown) as Models.Offers.Offer[]);
      });

    if (sortOptions && sortOptions.order) {
      fetch(`${API_URL}/sale/offers?order=${sortOptions.order}`)
        .then(res => res.json())
        .then((response: Response) => {
          setOffers((response as unknown) as Models.Offers.Offer[]);
        });
    }
  }, [location.search, sortOptions]);

  const handleSort = (opts: any): void => {
    setSortOptions(opts);
  };

  return (
    <S.Wrapper variant={offerListDisplayType}>
      <OffersListSettings
        setOfferListDisplayType={setOfferListDisplayType}
        handleSort={handleSort}
      />
      {offers.map(offer => (
        <Offer
          offer={offer}
          key={offer.id}
          displayType={offerListDisplayType}
        />
      ))}
    </S.Wrapper>
  );
};

export default Offers;
