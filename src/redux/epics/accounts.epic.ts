import { combineEpics, Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap, startWith } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import {
  AccountsActions,
  AccountsActionsTypes,
  signedUp,
  signingUp,
  signingUpFailed
} from '../actions/accounts.actions';

import { API_URL } from '../../consts';
import { State } from '../reducers';

const signUpEpic: Epic<AccountsActions, AccountsActions, State> = action$ =>
  action$.pipe(
    filter(isOfType(AccountsActionsTypes.SIGN_UP)),
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

export default combineEpics(signUpEpic);
