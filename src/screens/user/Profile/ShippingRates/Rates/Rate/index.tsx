import React, { useState } from 'react';
import * as Models from '../../../../../../models';
import * as S from './styled';

type Props = {
  rate: Models.ShippingRates.ShippingRate;
};

const Rate: React.FunctionComponent<Props> = (props: Props) => {
  const { rate } = props;

  return (
    <>
      <S.Rate key={rate.id}>
        <S.Name>{rate.name}</S.Name>
      </S.Rate>
      ;
    </>
  );
};

export default Rate;
