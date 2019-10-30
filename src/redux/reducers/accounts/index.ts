import { combineReducers } from 'redux';

import signUpReducer, {
  initialSignUpState,
  SignUpState
} from './sign-up.reducer';

export type AccountsState = {
  signUp: SignUpState;
};

export const initialAccountsState: AccountsState = {
  signUp: initialSignUpState
};

export default combineReducers({
  signUp: signUpReducer
});
