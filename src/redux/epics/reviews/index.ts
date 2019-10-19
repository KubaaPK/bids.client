import { combineEpics } from 'redux-observable';
import fetchSellerRatingEpic from './fetch-seller-rating.epic';

export default combineEpics(fetchSellerRatingEpic);
