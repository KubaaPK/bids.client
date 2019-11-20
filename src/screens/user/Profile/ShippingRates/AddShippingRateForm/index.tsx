import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { X } from 'react-feather';
import * as S from './styled';
import * as Form from '../../../../../components/Forms';
import * as Typography from '../../../../../components/Typography';
import * as Models from '../../../../../models';
import { State } from '../../../../../redux/reducers';
import { fetchDeliveryMethods } from '../../../../../redux/actions/deliery-methods/fetch-delivery-methods.action';
import { addShippingRate } from '../../../../../redux/actions/shipping-rates/add-shipping-rate.action';

import DeliveryMethod from './DeliveryMethod';
import Button from '../../../../../components/Button';

type OwnProps = {
  closeForm: () => void;
};

type ReduxState = {
  deliveryMethods: Models.DeliveryMethods.DeliveryMethod[];
  fetchingDeliveryMethods: boolean;
};

type ReduxDispatch = {
  performFetchDeliveryMethods: () => void;
  performAddShippingRate: (
    newShippingRate: Models.ShippingRates.NewShippingRate
  ) => void;
};

type Props = OwnProps & ReduxState & ReduxDispatch;

const AddShippingRateForm: React.FunctionComponent<Props> = (props: Props) => {
  const {
    deliveryMethods,
    fetchingDeliveryMethods,
    performFetchDeliveryMethods,
    closeForm,
    performAddShippingRate
  } = props;

  const [shippingRate, setShippingRate] = useState<
    Models.ShippingRates.NewShippingRate
  >({
    name: '',
    rates: []
  } as any);

  useEffect(() => {
    if (deliveryMethods.length === 0) {
      performFetchDeliveryMethods();
    }
  }, [deliveryMethods, performFetchDeliveryMethods]);

  const handleNameChange = (ev: React.FormEvent<HTMLInputElement>): void => {
    setShippingRate({
      ...shippingRate,
      name: ev.currentTarget.value
    } as any);
  };

  const handleShippingRateChange = (
    rate: Models.ShippingRates.NewRate
  ): void => {
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
  };

  const handleShippingRateSave = (
    ev: React.FormEvent<HTMLFormElement>
  ): void => {
    ev.preventDefault();
    performAddShippingRate(shippingRate);
    closeForm();
  };

  return (
    <S.Outline>
      <S.Wrapper>
        <S.DesktopClose onClick={closeForm}>
          <X />
        </S.DesktopClose>
        <Form.Form handleSubmit={handleShippingRateSave}>
          <Typography.Title
            text="Dodaj nowy cennik"
            font={{
              size: '2rem'
            }}
          />
          <Form.Input
            id="name"
            type="text"
            label="Nazwa cennika"
            restrictions={{ required: true }}
            handleChange={handleNameChange}
          />
          <S.SubTitle>
            Możesz stworzyć kilka cenników dostaw. Nazwa nie będzie widoczna dla
            kupujących.
          </S.SubTitle>

          <S.DeliveryMethods>
            {!fetchingDeliveryMethods &&
              deliveryMethods.map(method => (
                <DeliveryMethod
                  deliveryMethod={method}
                  key={method.id}
                  handleShippingRateChange={handleShippingRateChange}
                />
              ))}
          </S.DeliveryMethods>

          <Button text="Zapisz cennik" type="submit" variant="full" />
          <S.Close type="button" onClick={closeForm}>
            Zamknij
          </S.Close>
        </Form.Form>
      </S.Wrapper>
    </S.Outline>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    deliveryMethods:
      state.deliveryMethods.fetchDeliveryMethods.fetchedDeliveryMethods,
    fetchingDeliveryMethods:
      state.deliveryMethods.fetchDeliveryMethods.fetchingDeliveryMethods
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchDeliveryMethods: fetchDeliveryMethods,
  performAddShippingRate: addShippingRate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShippingRateForm);
