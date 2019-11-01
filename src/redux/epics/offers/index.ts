import { combineEpics } from 'redux-observable';
import fetchLatestOffersEpic from './fetch-latest-offers.epic';
import { fetchOfferByIdEpic } from './fetch-offer-by-id.epic';

export default combineEpics(fetchLatestOffersEpic, fetchOfferByIdEpic);
