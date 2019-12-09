import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  AddReviewActions,
  AddReviewActionsTypes
} from '../../actions/reviews/add-review.action';

export type AddReviewState = {
  addingReview: boolean;
  reviewAdded: AjaxResponse | undefined;
  addingReviewFailed: AjaxError | undefined;
};

export const initialAddReviewState: AddReviewState = {
  addingReview: false,
  addingReviewFailed: undefined,
  reviewAdded: undefined
};

export default function addReviewReducer(
  state: AddReviewState = initialAddReviewState,
  action: AddReviewActions
): AddReviewState {
  switch (action.type) {
    case AddReviewActionsTypes.ADD_REVIEW:
      return { ...state, addingReview: true };
    case AddReviewActionsTypes.ADDING_REVIEW:
      return { ...state, addingReview: action.payload };
    case AddReviewActionsTypes.REVIEW_ADDED:
      return { ...state, addingReview: false, reviewAdded: action.payload };
    case AddReviewActionsTypes.ADDING_REVIEW_FAILED:
      return {
        ...state,
        addingReview: false,
        addingReviewFailed: action.payload
      };
    default:
      return state;
  }
}
