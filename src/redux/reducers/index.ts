import { combineReducers } from 'redux';
import accountsReducer, {
  initialAccountState,
  AccountsState
} from './accounts.reducer';
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

export type State = {
  accounts: AccountsState;
  auth: AuthState;
  categories: CategoriesState;
  offers: OffersState;
  reviews: ReviewsState;
  parameters: ParametersState;
  deliveryMethods: DeliveryMethodsState;
};

export const initialState: State = {
  accounts: initialAccountState,
  auth: initialAuthState,
  categories: initialCategoryState,
  offers: initialOffersState,
  reviews: initialReviewsState,
  parameters: initialParametersState,
  deliveryMethods: initialDeliveryMethodsState
};

export default combineReducers({
  accounts: accountsReducer,
  auth: authReducer,
  categories: categoriesReducer,
  offers: offersReducer,
  reviews: reviewsReducer,
  parameters: parametersReducer,
  deliveryMethods: deliveryMethodsReducer
});
