import { combineEpics } from 'redux-observable';
import fetchLatestOffersEpic from './fetch-latest-offers.epic';
import fetchOfferByIdEpic from './fetch-offer-by-id.epic';
import addOfferEpic from './add-offer.epic';
import fetchDraftsEpic from './fetch-drafts.epic';
import deleteDraftEpic from './delete-draft.epic';

export default combineEpics(
  fetchLatestOffersEpic,
  fetchOfferByIdEpic,
  addOfferEpic,
  fetchDraftsEpic,
  deleteDraftEpic
);
