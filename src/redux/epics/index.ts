import { combineEpics } from 'redux-observable';
import accountsEpics from './accounts';
import authEpics from './auth';
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
