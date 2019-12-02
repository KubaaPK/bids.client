import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../../../models';
import * as S from './styled';
import { State } from '../../../../../redux/reducers';
import { fetchShippingRates } from '../../../../../redux/actions/shipping-rates/fetch-shipping-rates.action';
import Rate from './Rate';

type ReduxState = {
  rates: Models.ShippingRates.ShippingRate[];
  fetchingRates: boolean;
  fetchingRatesFailed: AjaxError | undefined;
  shippingRateAdded: boolean;
};

type ReduxDispatch = {
  performFetchRates: () => void;
};

type Props = ReduxState & ReduxDispatch;

const Rates: React.FunctionComponent<Props> = (props: Props) => {
  const { performFetchRates, rates, fetchingRates, shippingRateAdded } = props;

  useEffect(() => {
    performFetchRates();
  }, [performFetchRates, shippingRateAdded]);

  return (
    <>
      <S.Rates>
        {!fetchingRates &&
          rates.map(rate => <Rate rate={rate} key={rate.id} />)}
      </S.Rates>
    </>
  );
};

const mapStateToProps = (state: State): ReduxState => {
  return {
    fetchingRates: state.shippingRates.fetchShippingRates.fetchingShippingRates,
    rates: state.shippingRates.fetchShippingRates.shippingRates,
    fetchingRatesFailed:
      state.shippingRates.fetchShippingRates.fetchingShippingRatesFailed,
    shippingRateAdded: state.shippingRates.addShippingRate.addedShippingRate
  };
};

const mapDispatchToProps: ReduxDispatch = {
  performFetchRates: fetchShippingRates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rates);
