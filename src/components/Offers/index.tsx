import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as Models from '../../models';
import * as S from './styled';
import { API_URL } from '../../consts';
import Offer from './Offer';
import OffersListSettings from './OffersListSettings';

const Offers: React.FunctionComponent<{}> = () => {
  const [offers, setOffers] = useState<Models.Offers.Offers>({
    offers: [],
    totalAmount: 0
  });
  const [offerListDisplayType, setOfferListDisplayType] = useState<
    'grid' | 'list'
  >(localStorage.getItem('offer-list-display-style') as 'list' | 'grid');
  const [sortOptions, setSortOptions] = useState<{
    order?: 'DESC' | 'ASC';
  }>({
    order: 'DESC'
  });
  const [pageNumber, setPageNumber] = useState<number>(1);
  const location = useLocation<any>();

  const OFFERS_PER_PAGE: number = 30;

  useEffect(() => {
    fetch(
      `${API_URL}/sale/offers?order=${
        sortOptions.order
      }&limit=${OFFERS_PER_PAGE}&${pageNumber ? `offset=${0}` : ''}`
    )
      .then(res => res.json())
      .then((response: any) => {
        setOffers({
          offers: response[0] as Models.Offers.Offers['offers'],
          totalAmount: response[1] as number
        });
      });
  }, []);

  useEffect(() => {
    if (sortOptions.order || pageNumber || location.search) {
      fetch(
        `${API_URL}/sale/offers${
          location.search ? `${location.search}` : '?'
        }&order=${sortOptions.order}&limit=${OFFERS_PER_PAGE}&${
          pageNumber && pageNumber > 1
            ? `offset=${OFFERS_PER_PAGE * (pageNumber - 1)}`
            : ''
        }`
      )
        .then(res => res.json())
        .then((response: any) => {
          setOffers({
            offers: response[0] as Models.Offers.Offers['offers'],
            totalAmount: response[1] as number
          });
        });
    }
  }, [sortOptions, pageNumber, location.search]);

  const handleSort = (opts: any): void => {
    setSortOptions(opts);
  };

  const handleNextPageChange = (): void => {
    setPageNumber(pageNumber + 1);
  };

  const handlePageChange = (number: number): void => {
    setPageNumber(number);
  };

  return (
    <S.Wrapper variant={offerListDisplayType}>
      <OffersListSettings
        setOfferListDisplayType={setOfferListDisplayType}
        handleSort={handleSort}
        offersAmount={offers.totalAmount}
        handleNextPageChange={handleNextPageChange}
        handlePageChange={handlePageChange}
        currentPageNumber={pageNumber}
      />
      {offers.offers.map(offer => (
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
