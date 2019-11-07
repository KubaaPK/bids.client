import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchOfferActionsTypes {
  FETCH_OFFER = 'offers/fetch-offer',
  FETCHING_OFFER = 'offers/fetching-offer',
  OFFER_FETCHED = 'offers/offer-fetched',
  FETCHING_OFFER_FAILED = 'offers/fetching-offer-failed'
}

type FetchOfferAction = {
  type: FetchOfferActionsTypes.FETCH_OFFER;
  payload: string;
};

type FetchingOfferAction = {
  type: FetchOfferActionsTypes.FETCHING_OFFER;
};

type OfferFetchedAction = {
  type: FetchOfferActionsTypes.OFFER_FETCHED;
  payload: Models.Offers.SingleOffer;
};

type FetchingOfferFailedAction = {
  type: FetchOfferActionsTypes.FETCHING_OFFER_FAILED;
  payload: AjaxError;
};

export function fetchOffer(id: string): FetchOfferAction {
  return {
    type: FetchOfferActionsTypes.FETCH_OFFER,
    payload: id
  };
}

export function fetchingOffer(): FetchingOfferAction {
  return {
    type: FetchOfferActionsTypes.FETCHING_OFFER
  };
}

export function offerFeched(
  offer: Models.Offers.SingleOffer
): OfferFetchedAction {
  return {
    type: FetchOfferActionsTypes.OFFER_FETCHED,
    payload: offer
  };
}

export function fetchingOfferFailed(
  error: AjaxError
): FetchingOfferFailedAction {
  return {
    type: FetchOfferActionsTypes.FETCHING_OFFER_FAILED,
    payload: error
  };
}

export type FetchOfferActions =
  | FetchOfferAction
  | FetchingOfferAction
  | OfferFetchedAction
  | FetchingOfferFailedAction;
