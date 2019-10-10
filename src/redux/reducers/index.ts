import { combineReducers } from 'redux';
import accountsReducer, {
  initialAccountState,
  AccountsState
} from './accounts.reducer';
import authReducer, { initialAuthState, AuthState } from './auth.reducer';
import categoriesReducer, {
  initialCategoriesState,
  CategoriesState
} from './categories.reducer';
import offersReducer, {
  initialOffersState,
  OffersState
} from './offers.reducer';

export type State = {
  accounts: AccountsState;
  auth: AuthState;
  categories: CategoriesState;
  offers: OffersState;
};

export const initialState: State = {
  accounts: initialAccountState,
  auth: initialAuthState,
  categories: initialCategoriesState,
  offers: initialOffersState
};

export default combineReducers({
  accounts: accountsReducer,
  auth: authReducer,
  categories: categoriesReducer,
  offers: offersReducer
});
