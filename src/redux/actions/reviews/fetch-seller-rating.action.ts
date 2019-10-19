import { AjaxError } from 'rxjs/ajax';

export type RatingModel = {
  ratings: {
    complianceWithDescriptionAvg: number;
    customerServiceAvg: number;
    deliveryTimeAvg: number;
    shippingCostAvg: number;
  };
  summary: {
    positives: number;
    negatives: number;
    positivesPercent: string;
  };
};

export enum FetchSellerRatingActionTypes {
  FETCH_SELLER_RATING = 'ratings/FETCH_SELLER_RATING',
  SELLER_RATING_FETCHED = 'ratings/SELLER_RATING_FETCHED',
  FETCHING_SELLER_RATING_FAILED = 'rating/FETCHING_SELLER_RATING_FAILED'
}

export type FetchSellerRatingAction = {
  type: FetchSellerRatingActionTypes.FETCH_SELLER_RATING;
  payload: string;
};

export type SellerRatingFetchedAction = {
  type: FetchSellerRatingActionTypes.SELLER_RATING_FETCHED;
  payload: RatingModel;
};

export type FetchingSellerRatingFailedAction = {
  type: FetchSellerRatingActionTypes.FETCHING_SELLER_RATING_FAILED;
  payload: AjaxError;
};

export function fetchSellerRating(sellerId: string): FetchSellerRatingAction {
  return {
    type: FetchSellerRatingActionTypes.FETCH_SELLER_RATING,
    payload: sellerId
  };
}

export function sellerRatingFetched(
  rating: RatingModel
): SellerRatingFetchedAction {
  return {
    type: FetchSellerRatingActionTypes.SELLER_RATING_FETCHED,
    payload: rating
  };
}

export function fetchingSellerRatingFailed(
  error: AjaxError
): FetchingSellerRatingFailedAction {
  return {
    type: FetchSellerRatingActionTypes.FETCHING_SELLER_RATING_FAILED,
    payload: error
  };
}

export type FetchSellerRatingActions =
  | FetchSellerRatingAction
  | SellerRatingFetchedAction
  | FetchingSellerRatingFailedAction;
