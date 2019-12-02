import { combineReducers } from 'redux';
import newPurchaseReducer, {
  NewPurchaseState,
  initialNewPurchaseState
} from './new-purchase.reducer';

export type PurchasesState = {
  newPurchase: NewPurchaseState;
};

export const initialPurchasesState: PurchasesState = {
  newPurchase: initialNewPurchaseState
};

export default combineReducers({
  newPurchase: newPurchaseReducer
});
