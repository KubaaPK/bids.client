import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum AddShippingRateActionsTypes {
  ADD_SHIPPING_RATE = 'shipping-rates/add-shipping-rate',
  ADDED_SHIPPING_RATE = 'shipping-rates/added-shipping-rate',
  ADDING_SHIPPING_RATE_FAILED = 'shipping-rates/adding-shipping-rate-failed'
}

type AddShippingRateAction = {
  type: AddShippingRateActionsTypes.ADD_SHIPPING_RATE;
  payload: Models.ShippingRates.NewShippingRate;
};

type AddedShippingRateAction = {
  type: AddShippingRateActionsTypes.ADDED_SHIPPING_RATE;
  payload: boolean;
};

type AddingShippingRateFailedAction = {
  type: AddShippingRateActionsTypes.ADDING_SHIPPING_RATE_FAILED;
  payload: AjaxError;
};

export function addShippingRate(
  newShippingRate: Models.ShippingRates.NewShippingRate
): AddShippingRateAction {
  return {
    type: AddShippingRateActionsTypes.ADD_SHIPPING_RATE,
    payload: newShippingRate
  };
}

export function addedShippingRate(): AddedShippingRateAction {
  return {
    type: AddShippingRateActionsTypes.ADDED_SHIPPING_RATE,
    payload: true
  };
}

export function addingShippingRateFailed(
  error: AjaxError
): AddingShippingRateFailedAction {
  return {
    type: AddShippingRateActionsTypes.ADDING_SHIPPING_RATE_FAILED,
    payload: error
  };
}

export type AddShippingRateActions =
  | AddShippingRateAction
  | AddedShippingRateAction
  | AddingShippingRateFailedAction;
