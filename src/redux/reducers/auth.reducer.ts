import * as firebase from 'firebase';
import { AuthActions, AuthActionsTypes } from '../actions/auth.actions';
import { authMessage } from '../../utils/auth-messages';

export type AuthState = {
  isSigningInPending: boolean;
  signedIn: firebase.auth.UserCredential;
  signingInFailed: string | undefined;
};

export const initialAuthState: AuthState = {
  isSigningInPending: false,
  signedIn: undefined as any,
  signingInFailed: undefined
};

export default function authReducer(
  state: AuthState = initialAuthState,
  action: AuthActions
) {
  switch (action.type) {
    case AuthActionsTypes.SIGN_IN:
    case AuthActionsTypes.SIGNING_IN:
      return { ...state, isSigningInPending: true };
    case AuthActionsTypes.SIGNED_IN:
      return { ...state, signedIn: action.payload, isSigningInPending: false };
    case AuthActionsTypes.SIGNED_IN_FAILED:
      return {
        ...state,
        signingInFailed: authMessage(action.payload),
        isSigningInPending: false
      };
    default:
      return state;
  }
}
