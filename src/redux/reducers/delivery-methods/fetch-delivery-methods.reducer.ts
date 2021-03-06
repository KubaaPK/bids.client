import { AjaxError } from 'rxjs/ajax';
import {
  FetchDeliveryMethodActions,
  FetchDeliveryMethodsActionTypes
} from '../../actions/deliery-methods/fetch-delivery-methods.action';
import * as Models from '../../../models';

export type FetchDeliveryMethodsState = {
  fetchingDeliveryMethods: boolean;
  fetchedDeliveryMethods: Models.DeliveryMethods.DeliveryMethod[];
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
    case FetchDeliveryMethodsActionTypes.FETCHED_DELIVERY_METHODS:
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
