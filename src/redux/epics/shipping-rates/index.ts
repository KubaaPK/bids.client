import { combineEpics } from 'redux-observable';
import fetchShippingRatesEpic from './fetch-shipping-rates.epic';
import addShippingRateEpic from './add-shipping-rate.epic';

export default combineEpics(fetchShippingRatesEpic, addShippingRateEpic);
