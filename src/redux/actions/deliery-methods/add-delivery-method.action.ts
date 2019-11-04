import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum AddDeliveryMethodActionTypes {
  ADD_DELIVERY_METHOD = 'delivery-methods/add-delivery-method',
  ADDING_DELIVERY_METHOD = 'delivery-methods/adding-delivery-method',
  DELIVERY_METHOD_ADDED = 'delivery-methods/delivery-method-added',
  ADDING_DELIVERY_METHOD_FAILED = 'delivery-methods/adding-delivery-method-failed'
}

type AddDeliveryMethodAction = {
  type: AddDeliveryMethodActionTypes.ADD_DELIVERY_METHOD;
  payload: Models.DeliveryMethods.NewDeliveryMethod;
};

type AddingDeliveryMethodAction = {
  type: AddDeliveryMethodActionTypes.ADDING_DELIVERY_METHOD;
};

type DeliveryMethodAddedAction = {
  type: AddDeliveryMethodActionTypes.DELIVERY_METHOD_ADDED;
  payload: AjaxResponse;
};

type AddingDeliveryMethodFailedAction = {
  type: AddDeliveryMethodActionTypes.ADDING_DELIVERY_METHOD_FAILED;
  payload: AjaxError;
};

export function addDeliveryMethod(
  newDeliveryMethod: Models.DeliveryMethods.NewDeliveryMethod
): AddDeliveryMethodAction {
  return {
    type: AddDeliveryMethodActionTypes.ADD_DELIVERY_METHOD,
    payload: newDeliveryMethod
  };
}

export function addingDeliveryMethod(): AddingDeliveryMethodAction {
  return {
    type: AddDeliveryMethodActionTypes.ADDING_DELIVERY_METHOD
  };
}

export function deliveryMethodAdded(
  response: AjaxResponse
): DeliveryMethodAddedAction {
  return {
    type: AddDeliveryMethodActionTypes.DELIVERY_METHOD_ADDED,
    payload: response
  };
}

export function addingDeliveryMethodFailed(
  error: AjaxError
): AddingDeliveryMethodFailedAction {
  return {
    type: AddDeliveryMethodActionTypes.ADDING_DELIVERY_METHOD_FAILED,
    payload: error
  };
}

export type AddDeliveryMethodActions =
  | AddDeliveryMethodAction
  | AddingDeliveryMethodAction
  | DeliveryMethodAddedAction
  | AddingDeliveryMethodFailedAction;
