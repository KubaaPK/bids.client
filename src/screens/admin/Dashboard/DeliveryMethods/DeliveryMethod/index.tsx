import React from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';

type Props = {
  deliveryMethod: Models.DeliveryMethods.DeliveryMethod;
};

const DeliveryMethod: React.FunctionComponent<Props> = (props: Props) => {
  const { deliveryMethod } = props;

  return (
    <S.DeliveryMethod>
      <S.Name>{deliveryMethod.name}</S.Name>
      <S.PaymentPolicy>
        {deliveryMethod.paymentPolicy === 'CASH_ON_DELIVERY'
          ? 'Płatność przy odbiorze'
          : 'Płatność z góry'}
      </S.PaymentPolicy>
    </S.DeliveryMethod>
  );
};

export default DeliveryMethod;
