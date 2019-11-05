import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  DeleteDeliveryMethodActionTypes,
  DeleteDeliveryMethodActions
} from '../../actions/deliery-methods/delete-delivery-method.action';

export type DeleteDeliveryMethodState = {
  deletingDeliveryMethod: boolean;
  deliveryMethodDeleted: AjaxResponse | undefined;
  deletingDeliveryMethodFailed: AjaxError | undefined;
};

export const initialDeleteDeliveryMethodState: DeleteDeliveryMethodState = {
  deletingDeliveryMethod: false,
  deletingDeliveryMethodFailed: undefined,
  deliveryMethodDeleted: undefined
};

export default function deleteDeliveryMethodReducer(
  state: DeleteDeliveryMethodState = initialDeleteDeliveryMethodState,
  action: DeleteDeliveryMethodActions
): DeleteDeliveryMethodState {
  switch (action.type) {
    case DeleteDeliveryMethodActionTypes.DELETE_DELIVERY_METHOD:
    case DeleteDeliveryMethodActionTypes.DELETING_DELIVERY_METHOD:
      return { ...state, deletingDeliveryMethod: true };
    case DeleteDeliveryMethodActionTypes.DELIVERY_METHOD_DELETED:
      return {
        ...state,
        deletingDeliveryMethod: false,
        deliveryMethodDeleted: action.payload
      };
    case DeleteDeliveryMethodActionTypes.DELETING_DELIVERY_METHOD_FAILED:
      return {
        ...state,
        deletingDeliveryMethod: false,
        deletingDeliveryMethodFailed: action.payload
      };
    default:
      return state;
  }
}
