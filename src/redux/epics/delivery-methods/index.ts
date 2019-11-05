import { combineEpics } from 'redux-observable';
import fetchDeliveryMethodsEpic from './fetch-delivery-methods.epic';
import addDeliveryMethodEpic from './add-delivery-method.epic';
import deleteDeliveryMethodEpic from './delete-delivery-method.epic';

export default combineEpics(
  fetchDeliveryMethodsEpic,
  addDeliveryMethodEpic,
  deleteDeliveryMethodEpic
);
