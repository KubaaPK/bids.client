import React from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import { API_URL } from '../../consts';
import { useFetch } from '../../hooks';
import * as Models from '../../models';
import { addShippingRate } from '../../redux/actions/shipping-rates/add-shipping-rate.action';
import { AddShippingRate } from '../../ui/organisms';
import { State } from '../../redux/reducers';

type OwnProps = {
  closeForm: () => void;
};

type ReduxDispatch = {
  performAddShippingRate: (
    shippingRate: Models.ShippingRates.NewShippingRate
  ) => void;
};

type ReduxState = {
  addingShippingRateFailed: AjaxError | undefined;
};

type Props = OwnProps & ReduxDispatch & ReduxState;

function AddShippingRateContainer(props: Props): React.ReactElement {
  const { performAddShippingRate, addingShippingRateFailed, closeForm } = props;

  const { data: deliveryMethods } = useFetch(
    `${API_URL}/sale/delivery-methods`,
    {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('access-token')}`
      })
    }
  );

  // eslint-disable-next-line no-shadow
  function addShippingRate(
    shippingRate: Models.ShippingRates.NewShippingRate
  ): void {
    performAddShippingRate(shippingRate);
    closeForm();
  }

  return (
    <>
      {deliveryMethods !== null && (
        <AddShippingRate
          deliveryMethods={deliveryMethods}
          addShippingRate={addShippingRate}
          addingShippingRateFailed={addingShippingRateFailed}
        />
      )}
    </>
  );
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    addingShippingRateFailed:
      state.shippingRates.addShippingRate.addingShippingRateFailed
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performAddShippingRate: addShippingRate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShippingRateContainer);
