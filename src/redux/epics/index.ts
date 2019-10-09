import { combineEpics } from 'redux-observable';
import accountsEpics from './accounts.epic';
import authEpics from './auth.epic';
import categoriesEpics from './categories.epic';

export default combineEpics(accountsEpics, authEpics, categoriesEpics);
