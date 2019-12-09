import { combineReducers } from 'redux';
import fetchSellerRatingReducer, {
  FetchSellerRatingState,
  initialFetchSellerRatingState
} from './fetch-seller-rating.reducer';
import fetchReviewRequestsReducer, {
  FetchReviewRequestsState,
  initialFetchReviewRequestsState
} from './fetch-review-requests.reducer';
import addReviewReducer, {
  AddReviewState,
  initialAddReviewState
} from './add-review.reducer';

export type ReviewsState = {
  fetchSellerRating: FetchSellerRatingState;
  fetchReviewRequests: FetchReviewRequestsState;
  addReview: AddReviewState;
};

export const initialReviewsState: ReviewsState = {
  fetchSellerRating: initialFetchSellerRatingState,
  fetchReviewRequests: initialFetchReviewRequestsState,
  addReview: initialAddReviewState
};

export default combineReducers({
  fetchSellerRating: fetchSellerRatingReducer,
  fetchReviewRequests: fetchReviewRequestsReducer,
  addReview: addReviewReducer
});
