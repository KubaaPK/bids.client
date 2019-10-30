import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum AuthActionsTypes {
  SIGN_IN = 'auth/sign-in',
  SIGNING_IN = 'auth/signing-in',
  SIGNED_IN = 'auth/signed-in',
  SIGNED_IN_FAILED = 'auth/signed-in-failed',
  SIGN_OUT = 'auth/sign-out'
}

type SignInAction = {
  type: AuthActionsTypes.SIGN_IN;
  payload: Models.Auth.SignInCredentials;
};

type SigningInAction = {
  type: AuthActionsTypes.SIGNING_IN;
};

type SignedInAction = {
  type: AuthActionsTypes.SIGNED_IN;
  payload: firebase.auth.UserCredential;
};

type SignedInFailedAction = {
  type: AuthActionsTypes.SIGNED_IN_FAILED;
  payload: AjaxError;
};

type SignOutAction = {
  type: AuthActionsTypes.SIGN_OUT;
};

export function signIn(
  credentials: Models.Auth.SignInCredentials
): SignInAction {
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

export function signOut(): SignOutAction {
  return {
    type: AuthActionsTypes.SIGN_OUT
  };
}

export type AuthActions =
  | SignInAction
  | SigningInAction
  | SignedInAction
  | SignedInFailedAction
  | SignOutAction;
