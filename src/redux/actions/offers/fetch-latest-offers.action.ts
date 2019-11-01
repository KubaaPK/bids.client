import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchLatestOffersActionsTypes {
  FETCH_LATEST_OFFERS = 'offers/fetch-latest-offers',
  FETCHING_LATEST_OFFERS = 'offers/fetching-latest-offers',
  LATEST_OFFERS_FETCHED = 'offers/latest-offers-fetched',
  LATEST_OFFERS_FETCHING_FAILED = 'offers/latest-offers-fetching-failed'
}

type FetchLatestOffersAction = {
  type: FetchLatestOffersActionsTypes.FETCH_LATEST_OFFERS;
};

type FetchingLatestOffersAction = {
  type: FetchLatestOffersActionsTypes.FETCHING_LATEST_OFFERS;
};

type LatestOffersFetchedAction = {
  type: FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHED;
  payload: Models.Offers.Offer[];
};

type LatestOffersFetchingFailedAction = {
  type: FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHING_FAILED;
  payload: AjaxError;
};

export function fetchLatestOffers(): FetchLatestOffersAction {
  return {
    type: FetchLatestOffersActionsTypes.FETCH_LATEST_OFFERS
  };
}

export function fetchingLatestOffers(): FetchingLatestOffersAction {
  return {
    type: FetchLatestOffersActionsTypes.FETCHING_LATEST_OFFERS
  };
}

export function latestOffersFetched(
  offers: Models.Offers.Offer[]
): LatestOffersFetchedAction {
  return {
    type: FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHED,
    payload: offers
  };
}

export function latestOffersFetchingFailed(
  error: AjaxError
): LatestOffersFetchingFailedAction {
  return {
    type: FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHING_FAILED,
    payload: error
  };
}

export type FetchLatestOffersActions =
  | FetchLatestOffersAction
  | FetchingLatestOffersAction
  | LatestOffersFetchedAction
  | LatestOffersFetchingFailedAction;
