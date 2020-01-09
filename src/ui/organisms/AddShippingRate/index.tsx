import React from 'react';
import { AjaxError } from 'rxjs/ajax';
import { AddShippingRateDeliveryMethod, Notification } from '..';
import * as Models from '../../../models';
import { Button } from '../../atoms';
import { Field } from '../../molecules';
import * as S from './styled';

type Props = {
  deliveryMethods: Models.DeliveryMethods.DeliveryMethod[];
  addShippingRate: (shippingRate: Models.ShippingRates.NewShippingRate) => void;
  addingShippingRateFailed: AjaxError | undefined;
};

export default function AddShippingRate(props: Props): React.ReactElement {
  const {
    deliveryMethods = [],
    addShippingRate,
    addingShippingRateFailed
  } = props;
  const [shippingRate, setShippingRate] = React.useState<
    Models.ShippingRates.NewShippingRate
  >({
    name: '',
    rates: []
  });
  const [notification, setNotification] = React.useState<
    Models.Notification.NotificationProperties
  >({
    message: '',
    show: false,
    variant: 'error',
    closeAfter: 3000
  });

  React.useEffect(() => {
    if (addingShippingRateFailed !== undefined) {
      const errorMessage: string =
        (addingShippingRateFailed as any).status === 409
          ? 'Już posiadasz cennik o takiej nazwie.'
          : 'Błąd podczas dodawania cennika.';
      setNotification({
        message: errorMessage,
        show: true,
        variant: 'error',
        closeAfter: 3000
      });
    }
  }, [addingShippingRateFailed]);

  function addRate(
    rate: Models.ShippingRates.NewShippingRate['rates'][0]
  ): void {
    const existingRates = [...shippingRate.rates];

    const existingRateId: number = existingRates.findIndex(
      el => el.deliveryMethod.id === rate.deliveryMethod.id
    );

    if (existingRateId === -1) {
      existingRates.push(rate);
      setShippingRate({
        ...shippingRate,
        rates: existingRates
      } as any);
    } else {
      existingRates[existingRateId] = rate;
      setShippingRate({
        ...shippingRate,
        rates: existingRates
      } as any);
    }
  }

  function handleShippingRateNameChange(
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setShippingRate({
      ...shippingRate,
      name: ev.currentTarget.value
    });
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    addShippingRate(shippingRate);
  }

  return (
    <>
      {notification.show && (
        <Notification
          close={() => setNotification({ ...notification, show: false })}
          text={notification.message}
          type="error"
          closable
          closeTimeout={notification.closeAfter}
        />
      )}
      <S.Form onSubmit={onSubmit}>
        <Field
          label="Nazwa cennika"
          input={{
            id: 'name',
            type: 'text',
            restrictions: {
              required: true
            },
            onChange: handleShippingRateNameChange
          }}
        />
        {deliveryMethods !== null &&
          deliveryMethods.map(deliveryMethod => (
            <AddShippingRateDeliveryMethod
              deliveryMethod={deliveryMethod}
              key={deliveryMethod.id}
              addRate={addRate}
            />
          ))}
        <Button type="submit" kind="full" variant="default">
          Dodaj cennik
        </Button>
      </S.Form>
    </>
  );
}
