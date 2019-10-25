import { combineEpics } from 'redux-observable';
import accountsEpics from './accounts.epic';
import authEpics from './auth.epic';
import categoriesEpics from './categories';
import offersEpics from './offers';
import reviewsEpics from './reviews';
import parametersEpics from './parameters';
import deliveryMethodsEpics from './delivery-methods';

export default combineEpics(
  accountsEpics,
  authEpics,
  categoriesEpics,
  offersEpics,
  reviewsEpics,
  parametersEpics,
  deliveryMethodsEpics
);
