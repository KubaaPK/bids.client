import { combineReducers } from 'redux';
import accountsReducer, {
  initialAccountState,
  AccountsState
} from './accounts.reducer';
import authReducer, { initialAuthState, AuthState } from './auth.reducer';

export type State = {
  accounts: AccountsState;
  auth: AuthState;
};

export const initialState: State = {
  accounts: initialAccountState,
  auth: initialAuthState
};

export default combineReducers({
  accounts: accountsReducer,
  auth: authReducer
});
