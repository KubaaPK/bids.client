import { AjaxError } from 'rxjs/ajax';
import {
  FetchOfferActions,
  FetchOfferActionsTypes
} from '../../actions/offers/fetch-offer.action';
import * as Models from '../../../models';

export type FetchOfferState = {
  fetchingOffer: boolean;
  offerFetched: Models.Offers.SingleOffer | undefined;
  offerFetchingFailed: AjaxError | undefined;
};

export const initialFetchOfferState: FetchOfferState = {
  fetchingOffer: true,
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
      return { ...state, fetchingOffer: true };
    case FetchOfferActionsTypes.OFFER_FETCHED:
      return { ...state, fetchingOffer: false, offerFetched: action.payload };
    case FetchOfferActionsTypes.FETCHING_OFFER_FAILED:
      return {
        ...state,
        fetchingOffer: false,
        offerFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
