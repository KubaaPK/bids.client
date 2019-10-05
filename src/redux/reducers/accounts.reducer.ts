import { AjaxError } from 'rxjs/ajax';
import {
  AccountsActions,
  AccountsActionsTypes
} from '../actions/accounts.actions';

export type AccountsState = {
  isSigningUpPending: boolean;
  signedUp: boolean;
  signingUpFailed: AjaxError | undefined;
};

export const initialAccountState: AccountsState = {
  isSigningUpPending: false,
  signedUp: false,
  signingUpFailed: undefined
};

export default function accountsReducer(
  state: AccountsState = initialAccountState,
  action: AccountsActions
) {
  switch (action.type) {
    case AccountsActionsTypes.SIGN_UP:
    case AccountsActionsTypes.SIGNING_UP:
      return { ...state, isSigningUpPending: true };
    case AccountsActionsTypes.SIGNED_UP:
      return { ...state, signedUp: true, isSigningUpPending: false };
    case AccountsActionsTypes.SIGNING_UP_FAILED:
      return {
        ...state,
        signingUpFailed: action.payload.response,
        isSigningUpPending: false
      };
    default:
      return state;
  }
}
