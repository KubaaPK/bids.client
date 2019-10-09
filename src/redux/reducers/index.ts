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

export type State = {
  accounts: AccountsState;
  auth: AuthState;
  categories: CategoriesState;
};

export const initialState: State = {
  accounts: initialAccountState,
  auth: initialAuthState,
  categories: initialCategoriesState
};

export default combineReducers({
  accounts: accountsReducer,
  auth: authReducer,
  categories: categoriesReducer
});
