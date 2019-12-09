import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum AddReviewActionsTypes {
  ADD_REVIEW = 'reviews/add-review',
  ADDING_REVIEW = 'reviews/adding-review',
  REVIEW_ADDED = 'revies/review-added',
  ADDING_REVIEW_FAILED = 'reviews/adding-review-failed'
}

type AddReviewAction = {
  type: AddReviewActionsTypes.ADD_REVIEW;
  payload: Models.Reviews.NewReview;
};

type AddingReviewAction = {
  type: AddReviewActionsTypes.ADDING_REVIEW;
  payload: boolean;
};

type ReviewAddedAction = {
  type: AddReviewActionsTypes.REVIEW_ADDED;
  payload: AjaxResponse;
};

type AddingReviewFailedAction = {
  type: AddReviewActionsTypes.ADDING_REVIEW_FAILED;
  payload: AjaxError;
};

export function addReview(review: Models.Reviews.NewReview): AddReviewAction {
  return {
    type: AddReviewActionsTypes.ADD_REVIEW,
    payload: review
  };
}

export function addingReview(status: boolean): AddingReviewAction {
  return {
    type: AddReviewActionsTypes.ADDING_REVIEW,
    payload: status
  };
}

export function reviewAdded(response: AjaxResponse): ReviewAddedAction {
  return {
    type: AddReviewActionsTypes.REVIEW_ADDED,
    payload: response
  };
}

export function addingReviewFailed(error: AjaxError): AddingReviewFailedAction {
  return {
    type: AddReviewActionsTypes.ADDING_REVIEW_FAILED,
    payload: error
  };
}

export type AddReviewActions =
  | AddReviewAction
  | AddingReviewAction
  | ReviewAddedAction
  | AddingReviewFailedAction;
