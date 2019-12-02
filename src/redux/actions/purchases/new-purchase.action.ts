import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum NewPurchaseActionsTypes {
  NEW_PURCHASE = 'purchases/new-purchase',
  PROCESSING_PURCHASE = 'purchases/processing-purchase',
  PURCHASE_PROCESSED = 'purchases/purchase-processed',
  PROCESSING_PURCHASE_FAILED = 'purchases/processing-purchase-failed'
}

type NewPurchaseAction = {
  type: NewPurchaseActionsTypes.NEW_PURCHASE;
  payload: Models.Purchases.NewPurchase;
};

type ProcessingPurchaseAction = {
  type: NewPurchaseActionsTypes.PROCESSING_PURCHASE;
  payload: boolean;
};

type PurchaseProcessedAction = {
  type: NewPurchaseActionsTypes.PURCHASE_PROCESSED;
  payload: AjaxResponse;
};

type ProcessingPurchaseFailedAction = {
  type: NewPurchaseActionsTypes.PROCESSING_PURCHASE_FAILED;
  payload: AjaxError;
};

export function newPurchase(
  purchase: Models.Purchases.NewPurchase
): NewPurchaseAction {
  return {
    type: NewPurchaseActionsTypes.NEW_PURCHASE,
    payload: purchase
  };
}

export function processingPurchase(status: boolean): ProcessingPurchaseAction {
  return {
    type: NewPurchaseActionsTypes.PROCESSING_PURCHASE,
    payload: status
  };
}

export function purchaseProcessed(
  response: AjaxResponse
): PurchaseProcessedAction {
  return {
    type: NewPurchaseActionsTypes.PURCHASE_PROCESSED,
    payload: response
  };
}

export function processingPurchaseFailed(
  error: AjaxError
): ProcessingPurchaseFailedAction {
  return {
    type: NewPurchaseActionsTypes.PROCESSING_PURCHASE_FAILED,
    payload: error
  };
}

export type NewPurchaseActions =
  | NewPurchaseAction
  | PurchaseProcessedAction
  | ProcessingPurchaseAction
  | ProcessingPurchaseFailedAction;
