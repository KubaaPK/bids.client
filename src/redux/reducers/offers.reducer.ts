import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { OffersActions, OffersActionsTypes } from '../actions/offers.actions';
import { OfferModel } from '../../models/offer';

export type OffersState = {
  areLatestOffersFetching: boolean;
  latestOffersFetched: OfferModel[] | undefined;
  latestOffersFetchingFailed: AjaxError | undefined;
};

export const initialOffersState: OffersState = {
  areLatestOffersFetching: true,
  latestOffersFetched: undefined,
  latestOffersFetchingFailed: undefined
};

export default function offersReducer(
  state: OffersState = initialOffersState,
  action: OffersActions
) {
  switch (action.type) {
    case OffersActionsTypes.FETCH_LATEST_OFFERS:
    case OffersActionsTypes.FETCHING_LATEST_OFFERS:
      return { ...state, areLatestOffersFetching: true };
    case OffersActionsTypes.LATEST_OFFERS_FETCHED:
      return {
        ...state,
        latestOffersFetched: action.payload,
        areLatestOffersFetching: false
      };
    case OffersActionsTypes.LATEST_OFFERS_FETCHING_FAILED:
      return {
        ...state,
        areLatestOffersFetching: false,
        latestOffersFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
