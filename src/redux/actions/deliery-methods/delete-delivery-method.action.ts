import { AjaxResponse, AjaxError } from 'rxjs/ajax';

export enum DeleteDeliveryMethodActionTypes {
  DELETE_DELIVERY_METHOD = 'delivery-methods/delete-delivery-method',
  DELETING_DELIVERY_METHOD = 'delivery-methods/deleting-delivery-method',
  DELIVERY_METHOD_DELETED = 'delivery-methods/delivery-method-deleted',
  DELETING_DELIVERY_METHOD_FAILED = 'delivery-methods/deleting-delivery-method-failed'
}

type DeleteDeliveryMethodAction = {
  type: DeleteDeliveryMethodActionTypes.DELETE_DELIVERY_METHOD;
  payload: string;
};

type DeletingDeliveryMethodAction = {
  type: DeleteDeliveryMethodActionTypes.DELETING_DELIVERY_METHOD;
};

type DeliveryMethodDeletedAction = {
  type: DeleteDeliveryMethodActionTypes.DELIVERY_METHOD_DELETED;
  payload: AjaxResponse;
};

type DeletingDeliveryMethodFailedAction = {
  type: DeleteDeliveryMethodActionTypes.DELETING_DELIVERY_METHOD_FAILED;
  payload: AjaxError;
};

export function deleteDeliveryMethod(id: string): DeleteDeliveryMethodAction {
  return {
    type: DeleteDeliveryMethodActionTypes.DELETE_DELIVERY_METHOD,
    payload: id
  };
}

export function deletingDeliveryMethod(): DeletingDeliveryMethodAction {
  return {
    type: DeleteDeliveryMethodActionTypes.DELETING_DELIVERY_METHOD
  };
}

export function deliveryMethodDeleted(
  response: AjaxResponse
): DeliveryMethodDeletedAction {
  return {
    type: DeleteDeliveryMethodActionTypes.DELIVERY_METHOD_DELETED,
    payload: response
  };
}

export function deletingDeliveryMethodFailed(
  error: AjaxError
): DeletingDeliveryMethodFailedAction {
  return {
    type: DeleteDeliveryMethodActionTypes.DELETING_DELIVERY_METHOD_FAILED,
    payload: error
  };
}

export type DeleteDeliveryMethodActions =
  | DeleteDeliveryMethodAction
  | DeletingDeliveryMethodAction
  | DeliveryMethodDeletedAction
  | DeletingDeliveryMethodFailedAction;
