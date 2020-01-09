import React from 'react';
import * as Models from '../../../models';
import * as S from './styled';
import { Checkbox, Field } from '../../molecules';

type Props = {
  deliveryMethod: Models.DeliveryMethods.DeliveryMethod;
  addRate: (rate: Models.ShippingRates.NewShippingRate['rates'][0]) => void;
};

export default function AddShippingRateDeliveryMethod(
  props: Props
): React.ReactElement {
  const { deliveryMethod, addRate } = props;
  const [showRatesSettings, setShowRatesSettings] = React.useState<boolean>(
    false
  );
  const [rate, setRate] = React.useState<
    Models.ShippingRates.NewShippingRate['rates'][0]
  >({
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

  React.useEffect(() => {
    if (
      rate!.maxQuantityPerPackage > 0 &&
      rate!.deliveryMethod.name !== '' &&
      rate!.firstItemRate.amount !== ''
    ) {
      addRate(rate!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

  function handleDeliveryMethodSelect(): void {
    if (rate!.deliveryMethod.name) {
      setRate({
        ...rate!,
        deliveryMethod: {
          id: '',
          name: ''
        }
      });
    }
    setRate({
      ...rate!,
      deliveryMethod: {
        id: deliveryMethod.id,
        name: deliveryMethod.name
      }
    });
    setShowRatesSettings(!showRatesSettings);
  }

  function handleQuantityPerPackageChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setRate({
      ...rate!,
      maxQuantityPerPackage: Number.parseInt(ev.currentTarget.value, 10)
    });
  }

  function handleRateAmountChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setRate({
      ...rate!,
      firstItemRate: {
        ...rate!.firstItemRate,
        amount: ev.currentTarget.value
      }
    });
  }

  return (
    <S.Wrapper>
      <Checkbox
        label={deliveryMethod.name}
        subLabel={
          deliveryMethod.paymentPolicy === 'IN_ADVANCE'
            ? 'Płatność przy odbiorze'
            : 'Płatność z góry'
        }
        onChange={handleDeliveryMethodSelect}
      />
      {showRatesSettings && (
        <S.Rates>
          <Field
            label="Maks. w paczce"
            input={{
              id: 'maxQuantityPerPackage',
              type: 'number',
              onChange: handleQuantityPerPackageChange
            }}
          />
          <Field
            label="Koszt przesyłki"
            input={{
              id: 'firstItemRate',
              type: 'number',
              onChange: handleRateAmountChange
            }}
          />
        </S.Rates>
      )}
    </S.Wrapper>
  );
}
