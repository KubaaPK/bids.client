import { combineReducers } from 'redux';
import latestOffersReducer, {
  LatestOffersState,
  initialLatestOffersState
} from './fetch-latest-offers.reducer';
import fetchOfferReducer, {
  FetchOfferState,
  initialFetchOfferState
} from './fetch-offer.reducer';
import addOfferReducer, {
  AddOfferState,
  initialAddOfferState
} from './add-offer.reducer';
import fetchDraftsReducer, {
  initialFetchDraftsState,
  FetchDraftsState
} from './fetch-drafts.reducer';
import deleteDraftReducer, {
  DeleteDraftState,
  initialDeleteDraftState
} from './delete-draft.reducer';

export type OffersState = {
  latestOffers: LatestOffersState;
  fetchOffer: FetchOfferState;
  addOffer: AddOfferState;
  fetchDrafts: FetchDraftsState;
  deleteDraft: DeleteDraftState;
};

export const initialOffersState: OffersState = {
  latestOffers: initialLatestOffersState,
  fetchOffer: initialFetchOfferState,
  addOffer: initialAddOfferState,
  fetchDrafts: initialFetchDraftsState,
  deleteDraft: initialDeleteDraftState
};

export default combineReducers({
  latestOffers: latestOffersReducer,
  fetchOffer: fetchOfferReducer,
  addOffer: addOfferReducer,
  fetchDrafts: fetchDraftsReducer,
  deleteDraft: deleteDraftReducer
});
