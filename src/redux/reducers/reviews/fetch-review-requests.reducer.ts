import { AjaxError } from 'rxjs/ajax';
import {
  FetchReviewRequestsActionsTypes,
  FetchReviewRequestsActions
} from '../../actions/reviews/fetch-review-requests.action';
import * as Models from '../../../models';

export type FetchReviewRequestsState = {
  fetchingReviewRequests: boolean;
  fetchedReviewRequests: Models.Reviews.ReviewRequest[];
  fetchingReviewRequestsFailed: AjaxError | undefined;
};

export const initialFetchReviewRequestsState: FetchReviewRequestsState = {
  fetchedReviewRequests: [],
  fetchingReviewRequests: false,
  fetchingReviewRequestsFailed: undefined
};

export default function fetchReviewRequestsReducer(
  state: FetchReviewRequestsState = initialFetchReviewRequestsState,
  action: FetchReviewRequestsActions
): FetchReviewRequestsState {
  switch (action.type) {
    case FetchReviewRequestsActionsTypes.FETCH_REVIEW_REQUESTS:
      return { ...state, fetchingReviewRequests: true };
    case FetchReviewRequestsActionsTypes.FETCHING_REVIEW_REQUESTS:
      return { ...state, fetchingReviewRequests: action.payload };
    case FetchReviewRequestsActionsTypes.FETCHED_REVIEW_REQUESTS:
      return {
        ...state,
        fetchingReviewRequests: false,
        fetchedReviewRequests: action.payload
      };
    case FetchReviewRequestsActionsTypes.FETCHING_REVIEW_REQUESTS_FAILED:
      return {
        ...state,
        fetchingReviewRequests: false,
        fetchingReviewRequestsFailed: action.payload
      };
    default:
      return state;
  }
}
