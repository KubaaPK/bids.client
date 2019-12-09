import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchReviewRequestsActionsTypes {
  FETCH_REVIEW_REQUESTS = 'reviews/fetch-review-requests',
  FETCHING_REVIEW_REQUESTS = 'reviews/fetching-review-requests',
  FETCHED_REVIEW_REQUESTS = 'reviews/fetched-review-requests',
  FETCHING_REVIEW_REQUESTS_FAILED = 'reviews/fetching-review-requests-failed'
}

type FetchReviewRequestsAction = {
  type: FetchReviewRequestsActionsTypes.FETCH_REVIEW_REQUESTS;
};

type FetchingReviewRequestsAction = {
  type: FetchReviewRequestsActionsTypes.FETCHING_REVIEW_REQUESTS;
  payload: boolean;
};

type FetchedReviewRequestsAction = {
  type: FetchReviewRequestsActionsTypes.FETCHED_REVIEW_REQUESTS;
  payload: Models.Reviews.ReviewRequest[];
};

type FetchingReviewRequestsFailedAction = {
  type: FetchReviewRequestsActionsTypes.FETCHING_REVIEW_REQUESTS_FAILED;
  payload: AjaxError;
};

export function fetchReviewRequests(): FetchReviewRequestsAction {
  return {
    type: FetchReviewRequestsActionsTypes.FETCH_REVIEW_REQUESTS
  };
}

export function fetchingReviewRequests(
  status: boolean
): FetchingReviewRequestsAction {
  return {
    type: FetchReviewRequestsActionsTypes.FETCHING_REVIEW_REQUESTS,
    payload: status
  };
}

export function fetchedReviewRequests(
  reviewRequests: Models.Reviews.ReviewRequest[]
): FetchedReviewRequestsAction {
  return {
    type: FetchReviewRequestsActionsTypes.FETCHED_REVIEW_REQUESTS,
    payload: reviewRequests
  };
}

export function fetchingReviewRequestsFailed(
  error: AjaxError
): FetchingReviewRequestsFailedAction {
  return {
    type: FetchReviewRequestsActionsTypes.FETCHING_REVIEW_REQUESTS_FAILED,
    payload: error
  };
}

export type FetchReviewRequestsActions =
  | FetchReviewRequestsAction
  | FetchingReviewRequestsAction
  | FetchedReviewRequestsAction
  | FetchingReviewRequestsFailedAction;
