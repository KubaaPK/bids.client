import React from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../consts';
import * as Models from '../../models';
import { Offers } from '../../ui/organisms';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function OffersContainer(): React.ReactElement {
  const query = useQuery();
  const [offers, setOffers] = React.useState<Models.Offers.Offers>([] as any);
  const [searchString, setSearchString] = React.useState('');

  React.useEffect(() => {
    fetch(`${API_URL}/sale/offers`)
      .then(res => res.json())
      .then(res => setOffers(res));
  }, []);

  React.useEffect(() => {
    if (query.get('category.id')) {
      fetch(
        `${API_URL}/sale/offers${
          query.get('category.id') !== null
            ? `?category.id=${query.get('category.id')}`
            : ''
        }`
      )
        .then(res => res.json())
        .then(res => setOffers(res));
    }

    if (query.get("category.id") === null) {
      fetch(
        `${API_URL}/sale/offers`
      )
        .then(res => res.json())
        .then(res => setOffers(res));
    }

    if (searchString.length && query.get('category.id') === null) {
      setTimeout(() => {
        fetch(
          `${API_URL}/sale/offers${
            searchString.length > 0 ? `?title=${searchString}` : ''
          }`
        )
          .then(res => res.json())
          .then(res => setOffers(res));
      }, 1000);
    }
  }, [query.get('category.id'), searchString]);

  return (
    <>
      <Offers
        offers={offers && (offers as any[0])[0]}
        handleSearch={(search: string) => setSearchString(search)}
      />
    </>
  );
}
