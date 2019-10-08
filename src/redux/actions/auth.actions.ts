import { AjaxError } from 'rxjs/ajax';
import * as firebase from 'firebase';

export enum AuthActionsTypes {
  SIGN_IN = 'accounts/sign-in',
  SIGNING_IN = 'accounts/signing-in',
  SIGNED_IN = 'accounts/signed-in',
  SIGNED_IN_FAILED = 'accounts/signed-in-failed'
}

export type SignInCredentials = {
  email: string;
  password: string;
};

export type SignInAction = {
  type: AuthActionsTypes.SIGN_IN;
  payload: SignInCredentials;
};

export type SigningInAction = {
  type: AuthActionsTypes.SIGNING_IN;
};

export type SignedInAction = {
  type: AuthActionsTypes.SIGNED_IN;
  payload: firebase.auth.UserCredential;
};

export type SignedInFailedAction = {
  type: AuthActionsTypes.SIGNED_IN_FAILED;
  payload: AjaxError;
};

export function signIn(credentials: SignInCredentials): SignInAction {
  return {
    type: AuthActionsTypes.SIGN_IN,
    payload: credentials
  };
}

export function signingIn(): SigningInAction {
  return {
    type: AuthActionsTypes.SIGNING_IN
  };
}

export function signedIn(
  userCredential: firebase.auth.UserCredential
): SignedInAction {
  return {
    type: AuthActionsTypes.SIGNED_IN,
    payload: userCredential
  };
}

export function signedInFailed(error: AjaxError): SignedInFailedAction {
  return {
    type: AuthActionsTypes.SIGNED_IN_FAILED,
    payload: error
  };
}

export type AuthActions =
  | SignInAction
  | SigningInAction
  | SignedInAction
  | SignedInFailedAction;
