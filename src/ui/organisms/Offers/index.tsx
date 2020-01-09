import React from 'react';
import { Offer } from '..';
import * as Models from '../../../models';
import { List } from '../../atoms';
import * as S from './styled';

type Props = {
  offers: Models.Offers.Offers['offers'];
};

export default function Offers(props: Props): React.ReactElement {
  const { offers } = props;

  return (
    <S.Wrapper>
      <List type="unordered">
        {offers && offers.map(offer => <Offer offer={offer} key={offer.id} />)}
      </List>
    </S.Wrapper>
  );
}
