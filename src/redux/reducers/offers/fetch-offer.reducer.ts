import { AjaxError } from 'rxjs/ajax';
import {
  FetchOfferActions,
  FetchOfferActionsTypes
} from '../../actions/offers/fetch-offer.action';
import { OfferModel } from '../../../models/offer';

export type FetchOfferState = {
  isOfferFetching: boolean;
  offerFetched: OfferModel | undefined;
  offerFetchingFailed: AjaxError | undefined;
};

export const initialFetchOfferState: FetchOfferState = {
  isOfferFetching: true,
  offerFetched: undefined,
  offerFetchingFailed: undefined
};

export default function fetchOfferReducer(
  state: FetchOfferState = initialFetchOfferState,
  action: FetchOfferActions
) {
  switch (action.type) {
    case FetchOfferActionsTypes.FETCH_OFFER:
    case FetchOfferActionsTypes.FETCHING_OFFER:
      return { ...state, isOfferFetching: true };
    case FetchOfferActionsTypes.OFFER_FETCHED:
      return { ...state, isOfferFetching: false, offerFetched: action.payload };
    case FetchOfferActionsTypes.FETCHING_OFFER_FAILED:
      return {
        ...state,
        isOfferFetching: false,
        offerFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
