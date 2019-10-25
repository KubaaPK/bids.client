import { combineReducers } from 'redux';
import fetchDeliveryMethodsReducer, {
  FetchDeliveryMethodsState,
  initialFetchDeliveryMethodsState
} from './fetch-delivery-methods.reducer';

export type DeliveryMethodsState = {
  fetchDeliveryMethods: FetchDeliveryMethodsState;
};

export const initialDeliveryMethodsState: DeliveryMethodsState = {
  fetchDeliveryMethods: initialFetchDeliveryMethodsState
};

export default combineReducers({
  fetchDeliveryMethods: fetchDeliveryMethodsReducer
});
