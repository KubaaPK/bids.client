import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';
import {
  FetchSellerRatingActions,
  FetchSellerRatingActionTypes
} from '../../actions/reviews/fetch-seller-rating.action';

export type FetchSellerRatingState = {
  fetchingRating: boolean;
  ratingFetched: Models.Reviews.Rating | undefined;
  ratingFetchingFailed: AjaxError | undefined;
};

export const initialFetchSellerRatingState: FetchSellerRatingState = {
  fetchingRating: true,
  ratingFetched: undefined,
  ratingFetchingFailed: undefined
};

export default function fetchSellerRatingReducer(
  state: FetchSellerRatingState = initialFetchSellerRatingState,
  action: FetchSellerRatingActions
) {
  switch (action.type) {
    case FetchSellerRatingActionTypes.FETCH_SELLER_RATING:
      return { ...state, fetchingRating: true };
    case FetchSellerRatingActionTypes.SELLER_RATING_FETCHED:
      return {
        ...state,
        ratingFetched: action.payload,
        fetchingRating: false
      };
    case FetchSellerRatingActionTypes.FETCHING_SELLER_RATING_FAILED:
      return {
        ...state,
        fetchingRating: false,
        ratingFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
