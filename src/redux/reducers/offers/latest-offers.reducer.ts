import { AjaxError } from 'rxjs/ajax';
import {
  FetchLatestOffersActions,
  FetchLatestOffersActionsTypes
} from '../../actions/offers/fetch-latest-offers.action';
import { OfferModel } from '../../../models/offer';

export type LatestOffersState = {
  areLatestOffersFetching: boolean;
  latestOffersFetched: OfferModel[] | undefined;
  latestOffersFetchingFailed: AjaxError | undefined;
};

export const initialLatestOffersState: LatestOffersState = {
  areLatestOffersFetching: true,
  latestOffersFetched: undefined,
  latestOffersFetchingFailed: undefined
};

export default function latestOffersReducer(
  state: LatestOffersState = initialLatestOffersState,
  action: FetchLatestOffersActions
) {
  switch (action.type) {
    case FetchLatestOffersActionsTypes.FETCH_LATEST_OFFERS:
    case FetchLatestOffersActionsTypes.FETCHING_LATEST_OFFERS:
      return { ...state, areLatestOffersFetching: true };
    case FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHED:
      return {
        ...state,
        latestOffersFetched: action.payload,
        areLatestOffersFetching: false
      };
    case FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHING_FAILED:
      return {
        ...state,
        areLatestOffersFetching: false,
        latestOffersFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
