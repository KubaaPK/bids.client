import { combineReducers } from 'redux';
import accountsReducer, {
  initialAccountState,
  AccountsState
} from './accounts.reducer';

export type State = {
  accounts: AccountsState;
};

export const initialState: State = {
  accounts: initialAccountState
};

export default combineReducers({
  accounts: accountsReducer
});
