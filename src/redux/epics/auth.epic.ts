import * as firebase from 'firebase';
import { combineEpics, Epic } from 'redux-observable';
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
} from '../actions/auth.actions';
import { State } from '../reducers';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
firebase.initializeApp(firebaseConfig);

const signInEpic: Epic<AuthActions, any, State> = action$ =>
  action$.pipe(
    filter(isOfType(AuthActionsTypes.SIGN_IN)),
    mergeMap(action =>
      from(
        firebase
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

export default combineEpics(signInEpic);
