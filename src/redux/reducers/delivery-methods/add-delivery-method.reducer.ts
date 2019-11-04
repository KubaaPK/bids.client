import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import {
  AddDeliveryMethodActionTypes,
  AddDeliveryMethodActions
} from '../../actions/deliery-methods/add-delivery-method.action';

export type AddDeliveryMethodState = {
  addingDeliveryMethod: boolean;
  deliveryMethodAdded: AjaxResponse | undefined;
  addingDeliveryMethodFailed: AjaxError | undefined;
};

export const initialAddDeliveryMethodState: AddDeliveryMethodState = {
  addingDeliveryMethod: false,
  addingDeliveryMethodFailed: undefined,
  deliveryMethodAdded: undefined
};

export default function addDeliveryMethodReducer(
  state: AddDeliveryMethodState = initialAddDeliveryMethodState,
  action: AddDeliveryMethodActions
): AddDeliveryMethodState {
  switch (action.type) {
    case AddDeliveryMethodActionTypes.ADD_DELIVERY_METHOD:
    case AddDeliveryMethodActionTypes.ADDING_DELIVERY_METHOD:
      return { ...state, addingDeliveryMethod: true };
    case AddDeliveryMethodActionTypes.DELIVERY_METHOD_ADDED:
      return {
        ...state,
        addingDeliveryMethod: false,
        deliveryMethodAdded: action.payload
      };
    case AddDeliveryMethodActionTypes.ADDING_DELIVERY_METHOD_FAILED:
      return {
        ...state,
        addingDeliveryMethod: false,
        addingDeliveryMethodFailed: action.payload
      };
    default:
      return state;
  }
}
