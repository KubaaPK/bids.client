import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import {
  AddOfferActions,
  AddOfferActionsTypes
} from '../../actions/offers/add-offer.action';

export type AddOfferState = {
  addingOffer: boolean;
  addedOffer: AjaxResponse | undefined;
  addingOfferFailed: AjaxError | undefined;
};

export const initialAddOfferState: AddOfferState = {
  addedOffer: undefined,
  addingOffer: false,
  addingOfferFailed: undefined
};

export default function addOfferReducer(
  state: AddOfferState = initialAddOfferState,
  action: AddOfferActions
): AddOfferState {
  switch (action.type) {
    case AddOfferActionsTypes.ADD_OFFER:
      return { ...state, addingOffer: true };
    case AddOfferActionsTypes.ADDING_OFFER:
      return { ...state, addingOffer: action.payload };
    case AddOfferActionsTypes.ADDED_OFFER:
      return { ...state, addingOffer: false, addedOffer: action.payload };
    case AddOfferActionsTypes.ADDING_OFFER_FAILED:
      return {
        ...state,
        addingOffer: false,
        addingOfferFailed: action.payload
      };
    default:
      return state;
  }
}
