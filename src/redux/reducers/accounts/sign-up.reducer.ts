import { AjaxError } from 'rxjs/ajax';
import {
  SignUpActionTypes,
  SignUpActions
} from '../../actions/accounts/sign-up.action';

export type SignUpState = {
  signingUp: boolean;
  signedUp: boolean;
  signingUpFailed: AjaxError | undefined;
};

export const initialSignUpState: SignUpState = {
  signingUp: false,
  signedUp: false,
  signingUpFailed: undefined
};

export default function signUpReducer(
  state: SignUpState = initialSignUpState,
  action: SignUpActions
): SignUpState {
  switch (action.type) {
    case SignUpActionTypes.SIGN_UP:
    case SignUpActionTypes.SIGNING_UP:
      return { ...state, signingUp: true };
    case SignUpActionTypes.SIGNED_UP:
      return { ...state, signedUp: true, signingUp: false };
    case SignUpActionTypes.SIGNING_UP_FAILED:
      return {
        ...state,
        signingUpFailed: action.payload.response,
        signingUp: false
      };
    default:
      return state;
  }
}
