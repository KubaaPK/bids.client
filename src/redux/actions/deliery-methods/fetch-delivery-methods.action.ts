import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchDeliveryMethodsActionTypes {
  FETCH_DELIVERY_METHODS = 'delivery-methods/fetch-delivery-methods',
  FETCHING_DELIVERY_METHODS = 'delivery-methods/fetching-delivery-methods',
  FETCHED_DELIVERY_METHODS = 'delivery-methods/fetched-delivery-methods',
  FETCHING_DELIVERY_METHODS_FAILED = 'delivery-methods/fetching-delivery-methods-failed'
}

type FetchDeliveryMethodAction = {
  type: FetchDeliveryMethodsActionTypes.FETCH_DELIVERY_METHODS;
};

type FetchingDeliveryMethodAction = {
  type: FetchDeliveryMethodsActionTypes.FETCHING_DELIVERY_METHODS;
};

type DeliveryMethodFetchedAction = {
  type: FetchDeliveryMethodsActionTypes.FETCHED_DELIVERY_METHODS;
  payload: Models.DeliveryMethods.DeliveryMethod[];
};

type FetchingDeliveryMethodFailedAction = {
  type: FetchDeliveryMethodsActionTypes.FETCHING_DELIVERY_METHODS_FAILED;
  payload: AjaxError;
};

export function fetchDeliveryMethods(): FetchDeliveryMethodAction {
  return {
    type: FetchDeliveryMethodsActionTypes.FETCH_DELIVERY_METHODS
  };
}

export function fetchingDeliveryMethod(): FetchingDeliveryMethodAction {
  return {
    type: FetchDeliveryMethodsActionTypes.FETCHING_DELIVERY_METHODS
  };
}

export function deliveryMethodsFetched(
  deliveryMethods: Models.DeliveryMethods.DeliveryMethod[]
): DeliveryMethodFetchedAction {
  return {
    type: FetchDeliveryMethodsActionTypes.FETCHED_DELIVERY_METHODS,
    payload: deliveryMethods
  };
}

export function fetchingDeliveryMethodsFailed(
  error: AjaxError
): FetchingDeliveryMethodFailedAction {
  return {
    type: FetchDeliveryMethodsActionTypes.FETCHING_DELIVERY_METHODS_FAILED,
    payload: error
  };
}

export type FetchDeliveryMethodActions =
  | FetchDeliveryMethodAction
  | FetchingDeliveryMethodAction
  | DeliveryMethodFetchedAction
  | FetchingDeliveryMethodFailedAction;
