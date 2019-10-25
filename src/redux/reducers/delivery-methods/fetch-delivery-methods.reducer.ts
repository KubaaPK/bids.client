import { AjaxError } from 'rxjs/ajax';
import {
  FetchDeliveryMethodActions,
  FetchDeliveryMethodsActionTypes,
  DeliveryMethodModel
} from '../../actions/deliery-methods/fetch-delivery-methods.action';

export type FetchDeliveryMethodsState = {
  fetchingDeliveryMethods: boolean;
  fetchedDeliveryMethods: [] | DeliveryMethodModel[];
  fetchingDeliveryMethodsFailed: undefined | AjaxError;
};

export const initialFetchDeliveryMethodsState: FetchDeliveryMethodsState = {
  fetchingDeliveryMethods: true,
  fetchedDeliveryMethods: [],
  fetchingDeliveryMethodsFailed: undefined
};

export default function fetchDeliveryMethods(
  state: FetchDeliveryMethodsState = initialFetchDeliveryMethodsState,
  action: FetchDeliveryMethodActions
): FetchDeliveryMethodsState {
  switch (action.type) {
    case FetchDeliveryMethodsActionTypes.FETCH_DELIVERY_METHODS:
    case FetchDeliveryMethodsActionTypes.FETCHING_DELIVERY_METHODS:
      return { ...state, fetchingDeliveryMethods: true };
    case FetchDeliveryMethodsActionTypes.DELIVERY_METHOD_FETCHED:
      return {
        ...state,
        fetchingDeliveryMethods: false,
        fetchedDeliveryMethods: action.payload
      };
    case FetchDeliveryMethodsActionTypes.FETCHING_DELIVERY_METHODS_FAILED:
      return {
        ...state,
        fetchingDeliveryMethods: false,
        fetchingDeliveryMethodsFailed: action.payload
      };
    default:
      return state;
  }
}
