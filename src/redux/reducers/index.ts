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

export type State = {
  accounts: AccountsState;
  auth: AuthState;
  categories: CategoriesState;
  offers: OffersState;
  reviews: ReviewsState;
};

export const initialState: State = {
  accounts: initialAccountState,
  auth: initialAuthState,
  categories: initialCategoryState,
  offers: initialOffersState,
  reviews: initialReviewsState
};

export default combineReducers({
  accounts: accountsReducer,
  auth: authReducer,
  categories: categoriesReducer,
  offers: offersReducer,
  reviews: reviewsReducer
});
