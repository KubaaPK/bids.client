import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/reducers';
import * as Models from '../../models';
import { fetchShippingRates } from '../../redux/actions/shipping-rates/fetch-shipping-rates.action';
import { ShippingRates } from '../../ui/molecules';

type ReduxState = {
  shippingRates: Models.ShippingRates.ShippingRate[];
  addedShippingRate: boolean;
};

type ReduxDispatch = {
  performFetchShippingRates: () => void;
};

type Props = ReduxState & ReduxDispatch;

function ShippingRatesContainer(props: Props): React.ReactElement {
  const {
    performFetchShippingRates,
    shippingRates = [],
    addedShippingRate
  } = props;

  React.useEffect(() => {
    performFetchShippingRates();

    if (addedShippingRate) {
      performFetchShippingRates();
    }
  }, [performFetchShippingRates, addedShippingRate]);

  return <ShippingRates shippingRates={shippingRates} />;
}

const mapStateToProps = (state: State): ReduxState => {
  return {
    shippingRates: state.shippingRates.fetchShippingRates.shippingRates,
    addedShippingRate: state.shippingRates.addShippingRate.addedShippingRate
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchShippingRates: fetchShippingRates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippingRatesContainer);
