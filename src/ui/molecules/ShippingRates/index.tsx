import React from 'react';
import { MoreVertical } from 'react-feather';
import { Icon, List, Paragraph } from '../../atoms';
import * as Models from '../../../models';
import * as S from './styled';
import { IconButton } from '..';

type Props = {
  shippingRates: Models.ShippingRates.ShippingRate[];
};

export default function ShippingRates(props: Props): React.ReactElement {
  const { shippingRates } = props;

  return (
    <List type="unordered">
      {shippingRates.map(shippingRate => (
        <S.ShippingRate key={shippingRate.id}>
          <Paragraph text={shippingRate.name} />
          <IconButton
            text=""
            type="button"
            kind="blank"
            variant="default"
            icon={<Icon icon={<MoreVertical />} size="2.5rem" />}
          />
        </S.ShippingRate>
      ))}
    </List>
  );
}
