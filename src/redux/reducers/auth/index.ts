import firebase from 'firebase';
import jwtDecode from 'jwt-decode';
import { AuthActions, AuthActionsTypes } from '../../actions/auth/auth.actions';
import * as AuthUtils from '../../../utils/auth';

export type AuthState = {
  signingIn: boolean;
  signedIn: firebase.auth.UserCredential | null;
  signingInFailed: string | undefined;
  isAuthenticated: boolean;
  isAdmin: boolean;
  displayName: string;
};

export const initialAuthState: AuthState = {
  signingIn: false,
  signedIn: undefined as any,
  signingInFailed: undefined,
  isAuthenticated: AuthUtils.isUserAuthenticated(),
  isAdmin: AuthUtils.isUserAnAdmin(),
  displayName: AuthUtils.setInitialDisplayName()
};

export default function signInReducer(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionsTypes.SIGN_IN:
    case AuthActionsTypes.SIGNING_IN:
      return { ...state, signingIn: true };
    case AuthActionsTypes.SIGNED_IN:
      return {
        ...state,
        signedIn: action.payload,
        signingIn: false,
        isAuthenticated: true,
        isAdmin: jwtDecode<any>(
          // eslint-disable-next-line no-underscore-dangle
          (action.payload.user! as any)._lat
        ).roles.includes('admin'),
        displayName: action.payload.user!.displayName!
      };
    case AuthActionsTypes.SIGNED_IN_FAILED:
      return {
        ...state,
        signingInFailed: AuthUtils.displayFailedAuthMessage(action.payload),
        signingIn: false
      };
    case AuthActionsTypes.SIGN_OUT:
      localStorage.removeItem('access-token');
      localStorage.removeItem('refresh-token');
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
        signedIn: null
      };
    default:
      return state;
  }
}
