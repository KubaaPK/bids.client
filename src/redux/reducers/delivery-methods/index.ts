import { combineReducers } from 'redux';
import fetchDeliveryMethodsReducer, {
  FetchDeliveryMethodsState,
  initialFetchDeliveryMethodsState
} from './fetch-delivery-methods.reducer';
import addDeliveryMethodReducer, {
  AddDeliveryMethodState,
  initialAddDeliveryMethodState
} from './add-delivery-method.reducer';
import deleteDeliveryMethodReducer, {
  DeleteDeliveryMethodState,
  initialDeleteDeliveryMethodState
} from './delete-delivery-method.reducer';

export type DeliveryMethodsState = {
  fetchDeliveryMethods: FetchDeliveryMethodsState;
  addDeliveryMethod: AddDeliveryMethodState;
  deleteDeliveryMethod: DeleteDeliveryMethodState;
};

export const initialDeliveryMethodsState: DeliveryMethodsState = {
  fetchDeliveryMethods: initialFetchDeliveryMethodsState,
  addDeliveryMethod: initialAddDeliveryMethodState,
  deleteDeliveryMethod: initialDeleteDeliveryMethodState
};

export default combineReducers({
  fetchDeliveryMethods: fetchDeliveryMethodsReducer,
  addDeliveryMethod: addDeliveryMethodReducer,
  deleteDeliveryMethod: deleteDeliveryMethodReducer
});
