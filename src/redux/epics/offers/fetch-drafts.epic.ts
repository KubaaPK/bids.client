import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, filter, catchError, map } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { ajax } from 'rxjs/ajax';
import { API_URL } from '../../../consts';
import {
  FetchDraftsActions,
  FetchDraftsActionsTypes,
  fetchedDrafts,
  fetchingDraftsFailed
} from '../../actions/offers/fetch-drafts.action';
import { State } from '../../reducers';

const fetchDraftsEpic: Epic<
  FetchDraftsActions,
  FetchDraftsActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchDraftsActionsTypes.FETCH_DRAFTS)),
    mergeMap(() =>
      from(
        ajax
          .getJSON(`${API_URL}/sale/offers/drafts`, {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
          })
          .pipe(
            map((response: any) => fetchedDrafts(response)),
            catchError(error => of(fetchingDraftsFailed(error)))
          )
      )
    )
  );

export default fetchDraftsEpic;
