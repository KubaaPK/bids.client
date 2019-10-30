import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap, startWith } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import {
  SignUpActionTypes,
  SignUpActions,
  signedUp,
  signingUp,
  signingUpFailed
} from '../../actions/accounts/sign-up.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const signUpEpic: Epic<SignUpActions, SignUpActions, State> = action$ =>
  action$.pipe(
    filter(isOfType(SignUpActionTypes.SIGN_UP)),
    mergeMap(action =>
      from(
        ajax.post(`${API_URL}/accounts`, action.payload, {
          'Content-Type': 'application/json'
        })
      ).pipe(
        map(response => signedUp(response)),
        startWith(signingUp()),
        catchError((error: AjaxError) => of(signingUpFailed(error)))
      )
    )
  );

export default signUpEpic;
