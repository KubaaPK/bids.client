import { combineEpics } from 'redux-observable';
import fetchSellerRatingEpic from './fetch-seller-rating.epic';
import fetchReviewRequests from './fetch-review-requests.epic';
import addReviewEpic from './add-review.epic';

export default combineEpics(
  fetchSellerRatingEpic,
  fetchReviewRequests,
  addReviewEpic
);
