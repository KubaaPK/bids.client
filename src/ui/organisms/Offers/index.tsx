import React from 'react';
import { Offer } from '..';
import * as Models from '../../../models';
import { List } from '../../atoms';
import * as S from './styled';
import { OfferSearch } from '../../molecules';

type Props = {
  offers: Models.Offers.Offers['offers'];
  handleSearch: (search: string) => void;
};

export default function Offers(props: Props): React.ReactElement {
  const { offers, handleSearch } = props;

  function handleSearchChange(search: string): void {
    handleSearch(search);
  }

  return (
    <S.Wrapper>
      <OfferSearch handleSearch={handleSearchChange} />
      <br />
      <List type="unordered">
        {offers && offers.map(offer => <Offer offer={offer} key={offer.id} />)}
      </List>
    </S.Wrapper>
  );
}
