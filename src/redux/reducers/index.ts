import { combineReducers } from 'redux';
import accountsReducer, {
  initialAccountsState,
  AccountsState
} from './accounts';
import authReducer, { initialAuthState, AuthState } from './auth';
import categoriesReducer, {
  initialCategoryState,
  CategoriesState
} from './categories';
import offersReducer, { OffersState, initialOffersState } from './offers';
import reviewsReducer, { ReviewsState, initialReviewsState } from './reviews';
import parametersReducer, {
  ParametersState,
  initialParametersState
} from './parameters';
import deliveryMethodsReducer, {
  DeliveryMethodsState,
  initialDeliveryMethodsState
} from './delivery-methods';
import shippingRatesReducer, {
  initialShippingRatesState,
  ShippingRatesState
} from './shipping-rates';
import purchasesReducer, {
  PurchasesState,
  initialPurchasesState
} from './purchases';

export type State = {
  accounts: AccountsState;
  auth: AuthState;
  categories: CategoriesState;
  offers: OffersState;
  reviews: ReviewsState;
  parameters: ParametersState;
  deliveryMethods: DeliveryMethodsState;
  shippingRates: ShippingRatesState;
  purchases: PurchasesState;
};

export const initialState: State = {
  accounts: initialAccountsState,
  auth: initialAuthState,
  categories: initialCategoryState,
  offers: initialOffersState,
  reviews: initialReviewsState,
  parameters: initialParametersState,
  deliveryMethods: initialDeliveryMethodsState,
  shippingRates: initialShippingRatesState,
  purchases: initialPurchasesState
};

export default combineReducers({
  accounts: accountsReducer,
  auth: authReducer,
  categories: categoriesReducer,
  offers: offersReducer,
  reviews: reviewsReducer,
  parameters: parametersReducer,
  deliveryMethods: deliveryMethodsReducer,
  shippingRates: shippingRatesReducer,
  purchases: purchasesReducer
});
