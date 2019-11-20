import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchShippingRatesActionTypes {
  FETCH_SHIPPING_RATES = 'shipping-rates/fetch-shipping-rates',
  FETCHING_SHIPPING_RATES = 'shipping-rates/fetching-shipping-rates',
  FETCHED_SHIPPING_RATES = 'shipping-rates/fetched-shipping-rates',
  FETCHING_SHIPPING_RATES_FAILED = 'shipping-rates/fetching-shipping-rates-failed'
}

type FetchShippingRatesAction = {
  type: FetchShippingRatesActionTypes.FETCH_SHIPPING_RATES;
};

type FetchingShippingRatesAction = {
  type: FetchShippingRatesActionTypes.FETCHING_SHIPPING_RATES;
  payload: boolean;
};

type FetchedShippingRatesAction = {
  type: FetchShippingRatesActionTypes.FETCHED_SHIPPING_RATES;
  payload: Models.ShippingRates.ShippingRate[];
};

type FetchingShippingRatesFailedAction = {
  type: FetchShippingRatesActionTypes.FETCHING_SHIPPING_RATES_FAILED;
  payload: AjaxError;
};

export function fetchShippingRates(): FetchShippingRatesAction {
  return {
    type: FetchShippingRatesActionTypes.FETCH_SHIPPING_RATES
  };
}

export function fetchingShippingRates(): FetchingShippingRatesAction {
  return {
    type: FetchShippingRatesActionTypes.FETCHING_SHIPPING_RATES,
    payload: true
  };
}

export function fetchedShippingRates(
  shippingRates: Models.ShippingRates.ShippingRate[]
): FetchedShippingRatesAction {
  return {
    type: FetchShippingRatesActionTypes.FETCHED_SHIPPING_RATES,
    payload: shippingRates
  };
}

export function fetchingShippingRatesFailed(
  error: AjaxError
): FetchingShippingRatesFailedAction {
  return {
    type: FetchShippingRatesActionTypes.FETCHING_SHIPPING_RATES_FAILED,
    payload: error
  };
}

export type FetchShippingRatesActions =
  | FetchShippingRatesAction
  | FetchingShippingRatesAction
  | FetchedShippingRatesAction
  | FetchingShippingRatesFailedAction;
