import { Epic } from 'redux-observable';
import { of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import {
  AddReviewActionsTypes,
  reviewAdded,
  addingReviewFailed,
  AddReviewActions
} from '../../actions/reviews/add-review.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const addReviewEpic: Epic<
  AddReviewActions,
  AddReviewActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(AddReviewActionsTypes.ADD_REVIEW)),
    mergeMap(action =>
      from(
        ajax
          .post(`${API_URL}/sale/reviews`, action.payload, {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
            'Content-Type': 'application/json'
          })
          .pipe(
            map(response => reviewAdded(response)),
            catchError(error => of(addingReviewFailed(error)))
          )
      )
    )
  );

export default addReviewEpic;
