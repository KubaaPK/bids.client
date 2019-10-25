import { combineEpics } from 'redux-observable';
import fetchDeliveryMethodsEpic from './fetch-delivery-methods.epic';

export default combineEpics(fetchDeliveryMethodsEpic);
