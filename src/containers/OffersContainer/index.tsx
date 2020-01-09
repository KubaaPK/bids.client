import React from 'react';
import { API_URL } from '../../consts';
import { useFetch } from '../../hooks';
import * as Models from '../../models';
import { Offers } from '../../ui/organisms';

export default function OffersContainer(): React.ReactElement {
  const { data: offers } = useFetch<Models.Offers.Offers>(
    `${API_URL}/sale/offers`
  );

  return <Offers offers={offers && (offers as any[0])[0]} />;
}
