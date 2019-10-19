import { combineReducers } from 'redux';
import latestOffersReducer, {
  LatestOffersState,
  initialLatestOffersState
} from './latest-offers.reducer';
import fetchOfferReducer, {
  FetchOfferState,
  initialFetchOfferState
} from './fetch-offer.reducer';

export type OffersState = {
  latestOffers: LatestOffersState;
  fetchOffer: FetchOfferState;
};

export const initialOffersState: OffersState = {
  latestOffers: initialLatestOffersState,
  fetchOffer: initialFetchOfferState
};

export default combineReducers({
  latestOffers: latestOffersReducer,
  fetchOffer: fetchOfferReducer
});
