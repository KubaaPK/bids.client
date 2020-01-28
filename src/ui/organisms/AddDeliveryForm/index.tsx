import React from 'react';
import { Field, Select } from '../../molecules';
import { Button } from '../../atoms';
import * as S from './styled';
import * as Models from '../../../models';

type Props = {
  addDelivery: (delivery: Models.DeliveryMethods.NewDeliveryMethod) => void;
  closeForm(): void;
};

export default function AddDeliveryForm(props: Props): React.ReactElement {
  const { addDelivery, closeForm } = props;
  const [delivery, setDelivery] = React.useState<
    Models.DeliveryMethods.NewDeliveryMethod
  >({
    name: '',
    paymentPolicy: 'CASH_ON_DELIVERY'
  });

  function onSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    addDelivery(delivery);
  }

  function handleDeliveryNameChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setDelivery({
      ...delivery,
      name: ev.currentTarget.value
    });
  }

  function paymentPolicyOptions(): { label: string; value: any }[] {
    return [
      {
        value: 'CASH_ON_DELIVERY',
        label: 'Płatność przy odbiorze'
      },
      {
        value: 'IN_ADVANCE',
        label: 'Płatność z góry'
      }
    ];
  }

  function handlePaymentPolicyChange(ev: React.FormEvent<HTMLSelectElement>) {
    setDelivery({
      ...delivery,
      paymentPolicy: ev.currentTarget.value as any
    });
  }

  return (
    <S.Outline>
      <S.Form onSubmit={onSubmit}>
        <Field
          label="Nazwa metody dostawy"
          input={{
            id: 'name',
            type: 'text',
            restrictions: {
              required: true
            },
            onChange: handleDeliveryNameChange
          }}
        />

        <Select
          id="paymentPolicy"
          label="Sposób płatności"
          options={paymentPolicyOptions()}
          onChange={handlePaymentPolicyChange}
        />
        <Button type="submit" kind="full" variant="default">
          Dodaj metodę dostawy
        </Button>
        <Button
          type="button"
          kind="blank"
          variant="default"
          onClick={() => closeForm()}
        >
          Zamknij
        </Button>
      </S.Form>
    </S.Outline>
  );
}
