import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap,
  catchError,
  filter,
  map,
  debounceTime
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import { State } from '../../reducers';
import {
  UpdateDraftActions,
  UpdateDraftActionsTypes,
  updatedDraft,
  updatingDraftFailed
} from '../../actions/offers/update-draft.action';
import { API_URL } from '../../../consts';

const updateDraftEpic: Epic<
  UpdateDraftActions,
  UpdateDraftActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(UpdateDraftActionsTypes.UPDATE_DRAFT)),
    debounceTime(2000),
    mergeMap(action =>
      from(
        ajax.patch(
          `${API_URL}/sale/offers/${action.payload.id}`,
          action.payload.updatedDraft,
          {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
            'Content-Type': 'application/json'
          }
        )
      ).pipe(
        map(response => updatedDraft(response)),
        catchError(error => of(updatingDraftFailed(error)))
      )
    )
  );

export default updateDraftEpic;
