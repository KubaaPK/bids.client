import React, { useState, useEffect } from 'react';
import * as Models from '../../../../../models';
import * as S from './styled';
import * as Forms from '../../../../../components/Forms';

type Props = {
  deliveryMethod: Models.DeliveryMethods.DeliveryMethod;
  handleShippingRateChange: (newRate: Models.ShippingRates.NewRate) => void;
};

const DeliveryMethod: React.FunctionComponent<Props> = (props: Props) => {
  const { deliveryMethod, handleShippingRateChange } = props;
  const [showRateSettings, setShowRateSettings] = useState<boolean>(false);
  const [rate, setRate] = useState<Models.ShippingRates.NewRate>({
    deliveryMethod: {
      id: '',
      name: ''
    },
    firstItemRate: {
      amount: '',
      currency: 'PLN'
    },
    maxQuantityPerPackage: 0
  });

  useEffect(() => {
    if (
      rate &&
      rate.deliveryMethod.id &&
      rate.deliveryMethod.name &&
      rate.maxQuantityPerPackage &&
      rate.firstItemRate
    ) {
      handleShippingRateChange(rate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

  const onDeliveryMethodSelect = (): void => {
    setShowRateSettings(!showRateSettings);
    setRate({
      ...rate,
      deliveryMethod: {
        id: deliveryMethod.id,
        name: deliveryMethod.name
      }
    } as any);
    if (showRateSettings) {
      setRate(undefined as any);
    }
  };

  const handleRateChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setRate({
      ...rate,
      firstItemRate: {
        ...rate.firstItemRate,
        amount: ev.currentTarget.value,
        currency: 'PLN'
      }
    } as any);
  };

  const handleQuantityChange = (
    ev: React.FormEvent<HTMLInputElement>
  ): void => {
    setRate({
      ...rate,
      maxQuantityPerPackage: Number.parseInt(ev.currentTarget.value, 10)
    } as any);
  };

  return (
    <S.DeliveryMethod>
      <Forms.Checkbox
        label={deliveryMethod.name}
        subLabel={
          deliveryMethod.paymentPolicy === 'IN_ADVANCE'
            ? 'Płatność z góry'
            : 'Płatność przy odbiorze'
        }
        handleChange={onDeliveryMethodSelect}
      />
      {showRateSettings && (
        <S.RateSettings>
          <Forms.Input
            type="number"
            id="maxQuantityPerPackage"
            label="Maksymalnie w paczce"
            restrictions={{ required: true, min: 1 }}
            handleChange={handleQuantityChange}
          />
          <Forms.Input
            type="number"
            id="firstItemRate"
            label="Pierwsza sztuka"
            restrictions={{ required: true }}
            handleChange={handleRateChange}
          />
        </S.RateSettings>
      )}
    </S.DeliveryMethod>
  );
};

export default DeliveryMethod;
