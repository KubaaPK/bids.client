import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import {
  AddCategoryActions,
  AddCategoryActionTypes,
  categoryAdded,
  addingCategoryFailed
} from '../../actions/categories/add-category.actions';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const addCategoryEpic: Epic<
  AddCategoryActions,
  AddCategoryActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(AddCategoryActionTypes.ADD_CATEGORY)),
    mergeMap(action =>
      from(
        ajax.post(`${API_URL}/sale/categories`, action.payload, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map(response => categoryAdded(response)),
        catchError(error => of(addingCategoryFailed(error)))
      )
    )
  );

export default addCategoryEpic;
