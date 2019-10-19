import { AjaxError } from 'rxjs/ajax';
import { OfferModel } from '../../../models/offer';

export enum FetchLatestOffersActionsTypes {
  FETCH_LATEST_OFFERS = 'offers/fetch-latest-offers',
  FETCHING_LATEST_OFFERS = 'offers/fetching-latest-offers',
  LATEST_OFFERS_FETCHED = 'offers/latest-offers-fetched',
  LATEST_OFFERS_FETCHING_FAILED = 'offers/latest-offers-fetching-failed'
}

export type FetchLatestOffersAction = {
  type: FetchLatestOffersActionsTypes.FETCH_LATEST_OFFERS;
};

export type FetchingLatestOffersAction = {
  type: FetchLatestOffersActionsTypes.FETCHING_LATEST_OFFERS;
};

export type LatestOffersFetchedAction = {
  type: FetchLatestOffersActionsTypes.LATEST_OFFERS_FETCHED;
  payload: OfferModel[];
};

export type LatestOffersFetchingFailedAction = {
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
  offers: OfferModel[]
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
