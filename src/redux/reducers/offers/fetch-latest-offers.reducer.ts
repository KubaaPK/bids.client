import { AjaxError } from 'rxjs/ajax';
import {
  FetchLatestOffersActions,
  FetchLatestOffersActionsTypes
} from '../../actions/offers/fetch-latest-offers.action';
import * as Models from '../../../models';

export type LatestOffersState = {
  fetchingLatestOffers: boolean;
  latestOffers: Models.Offers.Offer[];
  fetchingLatestOffersFailed: AjaxError | undefined;
};

export const initialLatestOffersState: LatestOffersState = {
  fetchingLatestOffers: true,
  latestOffers: [],
  fetchingLatestOffersFailed: undefined
};

export default function fetchLatestOfferReducer(
  state: LatestOffersState = initialLatestOffersState,
  action: FetchLatestOffersActions
) {
  switch (action.type) {
    case FetchLatestOffersActionsTypes.FETCH_LATEST_OFFERS:
    case FetchLatestOffersActionsTypes.FETCHING_LATEST_OFFERS:
      return { ...state, fetchingLatestOffers: true };
    case FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHED:
      return {
        ...state,
        latestOffers: action.payload,
        fetchingLatestOffers: false
      };
    case FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHING_FAILED:
      return {
        ...state,
        fetchingLatestOffers: false,
        fetchingLatestOffersFailed: action.payload
      };
    default:
      return state;
  }
}
