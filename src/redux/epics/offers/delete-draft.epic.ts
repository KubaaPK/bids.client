import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  DeleteDraftActions,
  DeleteDraftActionsTypes,
  deletingDraftFailed,
  draftDeleted
} from '../../actions/offers/delete-draft.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const deleteDraftEpic: Epic<
  DeleteDraftActions,
  DeleteDraftActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(DeleteDraftActionsTypes.DELETE_DRAFT)),
    mergeMap(action =>
      from(
        ajax
          .delete(`${API_URL}/sale/offers/${action.payload}`, {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`
          })
          .pipe(
            map(response => draftDeleted(response)),
            catchError(error => of(deletingDraftFailed(error)))
          )
      )
    )
  );

export default deleteDraftEpic;
