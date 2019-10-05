import { AjaxError, AjaxResponse } from 'rxjs/ajax';

// eslint-disable-next-line import/prefer-default-export
export enum AccountsActionsTypes {
  SIGN_UP = 'accounts/sign-up',
  SIGNING_UP = 'accounts/signing-up',
  SIGNED_UP = 'accounts/signed-up',
  SIGNING_UP_FAILED = 'accounts/signing-up-failed'
}

export type SignUpCredentials = {
  email: string;
  username: string;
  password: string;
};

export type SignUpAction = {
  type: AccountsActionsTypes.SIGN_UP;
  payload: SignUpCredentials;
};

export type SigningUpAction = {
  type: AccountsActionsTypes.SIGNING_UP;
};

export type SignedUpAction = {
  type: AccountsActionsTypes.SIGNED_UP;
  payload: AjaxResponse;
};

export type SigningUpFailed = {
  type: AccountsActionsTypes.SIGNING_UP_FAILED;
  payload: AjaxError;
};

export function signUp(credentials: SignUpCredentials): SignUpAction {
  return {
    type: AccountsActionsTypes.SIGN_UP,
    payload: credentials
  };
}

export function signingUp(): SigningUpAction {
  return {
    type: AccountsActionsTypes.SIGNING_UP
  };
}

export function signedUp(response: AjaxResponse): SignedUpAction {
  return {
    type: AccountsActionsTypes.SIGNED_UP,
    payload: response
  };
}

export function signingUpFailed(error: AjaxError): SigningUpFailed {
  return {
    type: AccountsActionsTypes.SIGNING_UP_FAILED,
    payload: error
  };
}

export type AccountsActions =
  | SignUpAction
  | SignedUpAction
  | SigningUpFailed
  | SigningUpAction;
