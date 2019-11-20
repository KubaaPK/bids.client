import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';
import {
  FetchShippingRatesActionTypes,
  FetchShippingRatesActions
} from '../../actions/shipping-rates/fetch-shipping-rates.action';

export type FetchShippingRatesState = {
  fetchingShippingRates: boolean;
  shippingRates: Models.ShippingRates.ShippingRate[];
  fetchingShippingRatesFailed: AjaxError | undefined;
};

export const initialFetchShippingRatesState: FetchShippingRatesState = {
  fetchingShippingRates: true,
  fetchingShippingRatesFailed: undefined,
  shippingRates: []
};

export default function fetchShippingRates(
  state: FetchShippingRatesState = initialFetchShippingRatesState,
  action: FetchShippingRatesActions
): FetchShippingRatesState {
  switch (action.type) {
    case FetchShippingRatesActionTypes.FETCH_SHIPPING_RATES:
    case FetchShippingRatesActionTypes.FETCHING_SHIPPING_RATES:
      return { ...state, fetchingShippingRates: true };
    case FetchShippingRatesActionTypes.FETCHED_SHIPPING_RATES:
      return {
        ...state,
        fetchingShippingRates: false,
        shippingRates: action.payload
      };
    case FetchShippingRatesActionTypes.FETCHING_SHIPPING_RATES_FAILED:
      return {
        ...state,
        fetchingShippingRates: false,
        fetchingShippingRatesFailed: action.payload
      };
    default:
      return state;
  }
}
