import { combineReducers } from 'redux';
import fetchSellerRatingReducer, {
  FetchSellerRatingState,
  initialFetchSellerRatingState
} from './fetch-seller-rating.reducer';

export type ReviewsState = {
  fetchSellerRating: FetchSellerRatingState;
};

export const initialReviewsState: ReviewsState = {
  fetchSellerRating: initialFetchSellerRatingState
};

export default combineReducers({
  fetchSellerRating: fetchSellerRatingReducer
});
