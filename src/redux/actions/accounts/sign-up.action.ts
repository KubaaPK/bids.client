import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum SignUpActionTypes {
  SIGN_UP = 'accounts/sign-up',
  SIGNING_UP = 'accounts/signing-up',
  SIGNED_UP = 'accounts/signed-up',
  SIGNING_UP_FAILED = 'accounts/signing-up-failed'
}

type SignUpAction = {
  type: SignUpActionTypes.SIGN_UP;
  payload: Models.Auth.SignUpCredentials;
};

type SigningUpAction = {
  type: SignUpActionTypes.SIGNING_UP;
};

type SignedUpAction = {
  type: SignUpActionTypes.SIGNED_UP;
  payload: AjaxResponse;
};

type SigningUpFailedAction = {
  type: SignUpActionTypes.SIGNING_UP_FAILED;
  payload: AjaxError;
};

export function signUp(
  credentials: Models.Auth.SignUpCredentials
): SignUpAction {
  return {
    type: SignUpActionTypes.SIGN_UP,
    payload: credentials
  };
}

export function signingUp(): SigningUpAction {
  return {
    type: SignUpActionTypes.SIGNING_UP
  };
}

export function signedUp(response: AjaxResponse): SignedUpAction {
  return {
    type: SignUpActionTypes.SIGNED_UP,
    payload: response
  };
}

export function signingUpFailed(error: AjaxError): SigningUpFailedAction {
  return {
    type: SignUpActionTypes.SIGNING_UP_FAILED,
    payload: error
  };
}

export type SignUpActions =
  | SignUpAction
  | SignedUpAction
  | SigningUpFailedAction
  | SigningUpAction;
