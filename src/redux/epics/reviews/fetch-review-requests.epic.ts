import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import {
  FetchReviewRequestsActions,
  FetchReviewRequestsActionsTypes,
  fetchedReviewRequests,
  fetchingReviewRequestsFailed
} from '../../actions/reviews/fetch-review-requests.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const fetchReviewRequests: Epic<
  FetchReviewRequestsActions,
  FetchReviewRequestsActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchReviewRequestsActionsTypes.FETCH_REVIEW_REQUESTS)),
    mergeMap(() =>
      from(
        ajax.getJSON(`${API_URL}/sale/reviews/requests`, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map((response: any) => fetchedReviewRequests(response)),
        catchError(error => of(fetchingReviewRequestsFailed(error)))
      )
    )
  );

export default fetchReviewRequests;
