import { combineEpics } from 'redux-observable';
import accountsEpics from './accounts';
import authEpics from './auth';
import categoriesEpics from './categories';
import offersEpics from './offers';
import reviewsEpics from './reviews';
import parametersEpics from './parameters';
import deliveryMethodsEpics from './delivery-methods';
import shippingRatesEpics from './shipping-rates';
import purchasesEpics from './purchases';

export default combineEpics(
  accountsEpics,
  authEpics,
  categoriesEpics,
  offersEpics,
  reviewsEpics,
  parametersEpics,
  deliveryMethodsEpics,
  shippingRatesEpics,
  purchasesEpics
);
