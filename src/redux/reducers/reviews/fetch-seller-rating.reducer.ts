import { AjaxError } from 'rxjs/ajax';
import {
  FetchSellerRatingActions,
  FetchSellerRatingActionTypes,
  RatingModel
} from '../../actions/reviews/fetch-seller-rating.action';

export type FetchSellerRatingState = {
  isRatingFetching: boolean;
  ratingFetched: RatingModel | undefined;
  ratingFetchingFailed: AjaxError | undefined;
};

export const initialFetchSellerRatingState: FetchSellerRatingState = {
  isRatingFetching: true,
  ratingFetched: undefined,
  ratingFetchingFailed: undefined
};

export default function fetchSellerRatingReducer(
  state: FetchSellerRatingState = initialFetchSellerRatingState,
  action: FetchSellerRatingActions
) {
  switch (action.type) {
    case FetchSellerRatingActionTypes.FETCH_SELLER_RATING:
      return { ...state, isRatingFetching: true };
    case FetchSellerRatingActionTypes.SELLER_RATING_FETCHED:
      return {
        ...state,
        ratingFetched: action.payload,
        isRatingFetching: false
      };
    case FetchSellerRatingActionTypes.FETCHING_SELLER_RATING_FAILED:
      return {
        ...state,
        isRatingFetching: false,
        ratingFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
