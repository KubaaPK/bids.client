import { combineEpics } from 'redux-observable';
import newPurchaseEpic from './new-purchase.epic';

export default combineEpics(newPurchaseEpic);
