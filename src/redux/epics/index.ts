import { combineEpics } from 'redux-observable';
import accountsEpics from './accounts.epic';
import authEpics from './auth.epic';
import categoriesEpics from './categories.epic';
import offersEpics from './offers';
import reviewsEpics from './reviews';

export default combineEpics(
  accountsEpics,
  authEpics,
  categoriesEpics,
  offersEpics,
  reviewsEpics
);
