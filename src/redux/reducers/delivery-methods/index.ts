import { combineReducers } from 'redux';
import fetchDeliveryMethodsReducer, {
  FetchDeliveryMethodsState,
  initialFetchDeliveryMethodsState
} from './fetch-delivery-methods.reducer';
import addDeliveryMethodReducer, {
  AddDeliveryMethodState,
  initialAddDeliveryMethodState
} from './add-delivery-method.reducer';

export type DeliveryMethodsState = {
  fetchDeliveryMethods: FetchDeliveryMethodsState;
  addDeliveryMethod: AddDeliveryMethodState;
};

export const initialDeliveryMethodsState: DeliveryMethodsState = {
  fetchDeliveryMethods: initialFetchDeliveryMethodsState,
  addDeliveryMethod: initialAddDeliveryMethodState
};

export default combineReducers({
  fetchDeliveryMethods: fetchDeliveryMethodsReducer,
  addDeliveryMethod: addDeliveryMethodReducer
});
