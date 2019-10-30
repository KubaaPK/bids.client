import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';
import { catchError, filter, map, mergeMap, startWith } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import {
  AuthActions,
  AuthActionsTypes,
  signedIn,
  signedInFailed,
  signingIn
} from '../../actions/auth/auth.actions';
import { State } from '../../reducers';
import { firebaseApp } from '../../..';

const signInEpic: Epic<AuthActions, any, State> = action$ =>
  action$.pipe(
    filter(isOfType(AuthActionsTypes.SIGN_IN)),
    mergeMap(action =>
      from(
        firebaseApp
          .auth()
          .signInWithEmailAndPassword(
            action.payload.email,
            action.payload.password
          )
      ).pipe(
        map(response => signedIn(response)),
        startWith(signingIn()),
        catchError((error: AjaxError) => of(signedInFailed(error)))
      )
    )
  );

export default signInEpic;
