import React, { useEffect, useState } from 'react';
import * as Models from '../../../../../models';
import * as Form from '../../../../../components/Forms';
import { API_URL } from '../../../../../consts';

type Props = {
  handleShippingRateChange: (id: string) => void;
  restoredShippingRate: string;
};

const Delivery: React.FunctionComponent<Props> = (props: Props) => {
  const { handleShippingRateChange, restoredShippingRate } = props;

  const [shippingRates, setShippingRates] = useState<
    Models.ShippingRates.ShippingRate[]
  >([]);

  const [fetchingShippingRates, setFetchingShippingRates] = useState<boolean>(
    true
  );

  useEffect(() => {
    fetch(`${API_URL}/sale/shipping-rates`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    })
      .then(res => res.json())
      .then(res => {
        setShippingRates(res);
        setFetchingShippingRates(false);
      });
  }, []);

  const shippingRatesSelectOptions = (): { value: any; label: string }[] => {
    return shippingRates.map(rate => {
      return {
        label: rate.name,
        value: rate.id
      };
    });
  };

  const onShippingRateChange = (
    ev: React.FormEvent<HTMLSelectElement>
  ): void => {
    handleShippingRateChange(ev.currentTarget.value);
  };

  const handleRestoredShippingRate = (): string | undefined => {
    if (shippingRatesSelectOptions.length > 0) {
      return shippingRatesSelectOptions().find(
        el => el.value === restoredShippingRate
      )!.value;
    }
  };

  return (
    <>
      {!fetchingShippingRates && (
        <Form.Select
          id="shippingRate"
          label="Cennik"
          restrictions={{ required: true }}
          options={shippingRatesSelectOptions()}
          handleChange={onShippingRateChange}
          defaultSelectValue={
            handleRestoredShippingRate() ? handleRestoredShippingRate() : ''
          }
        />
      )}
    </>
  );
};

export default Delivery;
