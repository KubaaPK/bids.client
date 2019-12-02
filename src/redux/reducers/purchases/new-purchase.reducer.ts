import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import {
  NewPurchaseActions,
  NewPurchaseActionsTypes
} from '../../actions/purchases/new-purchase.action';

export type NewPurchaseState = {
  processingPurchase: boolean;
  processingPurchaseFailed: AjaxError | undefined;
  purchaseProcessed: AjaxResponse | undefined;
};

export const initialNewPurchaseState: NewPurchaseState = {
  processingPurchase: false,
  processingPurchaseFailed: undefined,
  purchaseProcessed: undefined
};

export default function newPurchaseReducer(
  state: NewPurchaseState = initialNewPurchaseState,
  action: NewPurchaseActions
): NewPurchaseState {
  switch (action.type) {
    case NewPurchaseActionsTypes.NEW_PURCHASE:
      return { ...state, processingPurchase: true };
    case NewPurchaseActionsTypes.PROCESSING_PURCHASE:
      return { ...state, processingPurchase: true };
    case NewPurchaseActionsTypes.PURCHASE_PROCESSED:
      return { ...state, purchaseProcessed: action.payload };
    case NewPurchaseActionsTypes.PROCESSING_PURCHASE_FAILED:
      return { ...state, processingPurchaseFailed: action.payload };
    default:
      return state;
  }
}
