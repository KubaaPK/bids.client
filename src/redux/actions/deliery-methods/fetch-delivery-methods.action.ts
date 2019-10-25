import { AjaxError } from 'rxjs/ajax';

export type DeliveryMethodModel = {
  id: string;
  name: string;
  paymentPolicy: string;
};

export enum FetchDeliveryMethodsActionTypes {
  FETCH_DELIVERY_METHODS = 'delivery-methods/fetch-delivry-methods',
  FETCHING_DELIVERY_METHODS = 'delivery-methods/fetching-delivery-methods',
  DELIVERY_METHOD_FETCHED = 'delivery-methods/delivery-methods-fetched',
  FETCHING_DELIVERY_METHODS_FAILED = 'delivery-methods/fetching-delivery-methods-failed'
}

type FetchDeliveryMethodAction = {
  type: FetchDeliveryMethodsActionTypes.FETCH_DELIVERY_METHODS;
};

type FetchingDeliveryMethodAction = {
  type: FetchDeliveryMethodsActionTypes.FETCHING_DELIVERY_METHODS;
};

type DeliveryMethodFetchedAction = {
  type: FetchDeliveryMethodsActionTypes.DELIVERY_METHOD_FETCHED;
  payload: DeliveryMethodModel[];
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
  deliveryMethods: DeliveryMethodModel[]
): DeliveryMethodFetchedAction {
  return {
    type: FetchDeliveryMethodsActionTypes.DELIVERY_METHOD_FETCHED,
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
