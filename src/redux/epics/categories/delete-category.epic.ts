import { Epic } from 'redux-observable';
import { filter, mergeMap, catchError, map } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';
import { from, of } from 'rxjs';
import { isOfType } from 'typesafe-actions';
import {
  DeleteCategoryActions,
  DeleteCategoryActionTypes,
  categoryDeleted,
  deletingCategoryFailed
} from '../../actions/categories/delete-category.actions';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const deleteCategoryEpic: Epic<
  DeleteCategoryActions,
  DeleteCategoryActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(DeleteCategoryActionTypes.DELETE_CATEGORY)),
    mergeMap(action =>
      from(
        ajax.delete(`${API_URL}/sale/categories/${action.payload}`, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map((response: any) => categoryDeleted(response)),
        catchError((error: AjaxError) => of(deletingCategoryFailed(error)))
      )
    )
  );

export default deleteCategoryEpic;
