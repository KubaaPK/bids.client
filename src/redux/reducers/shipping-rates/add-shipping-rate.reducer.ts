import { AjaxError } from 'rxjs/ajax';
import {
  AddShippingRateActions,
  AddShippingRateActionsTypes
} from '../../actions/shipping-rates/add-shipping-rate.action';

export type AddShippingRateState = {
  addingShippingRate: boolean;
  addedShippingRate: boolean;
  addingShippingRateFailed: AjaxError | undefined;
};

export const initialAddShippingRateState: AddShippingRateState = {
  addedShippingRate: false,
  addingShippingRate: false,
  addingShippingRateFailed: undefined
};

export default function addShippingRateReducer(
  state: AddShippingRateState = initialAddShippingRateState,
  action: AddShippingRateActions
): AddShippingRateState {
  switch (action.type) {
    case AddShippingRateActionsTypes.ADD_SHIPPING_RATE:
      return { ...state, addingShippingRate: true };
    case AddShippingRateActionsTypes.ADDED_SHIPPING_RATE:
      return { ...state, addingShippingRate: false, addedShippingRate: true };
    case AddShippingRateActionsTypes.ADDING_SHIPPING_RATE_FAILED:
      return {
        ...state,
        addingShippingRate: false,
        addingShippingRateFailed: action.payload
      };
    default:
      return state;
  }
}
