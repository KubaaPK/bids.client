import { combineReducers } from 'redux';
import accountsReducer, {
  initialAccountState,
  AccountsState
} from './accounts.reducer';
import authReducer, { initialAuthState, AuthState } from './auth.reducer';
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

export type State = {
  accounts: AccountsState;
  auth: AuthState;
  categories: CategoriesState;
  offers: OffersState;
  reviews: ReviewsState;
  parameters: ParametersState;
};

export const initialState: State = {
  accounts: initialAccountState,
  auth: initialAuthState,
  categories: initialCategoryState,
  offers: initialOffersState,
  reviews: initialReviewsState,
  parameters: initialParametersState
};

export default combineReducers({
  accounts: accountsReducer,
  auth: authReducer,
  categories: categoriesReducer,
  offers: offersReducer,
  reviews: reviewsReducer,
  parameters: parametersReducer
});
