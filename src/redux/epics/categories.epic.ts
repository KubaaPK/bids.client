import { combineEpics, Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap, startWith } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import {
  CategoriesActions,
  CategoriesActionsTypes,
  categoriesFetched,
  categoriesFetchingFailed,
  fetchCategories
} from '../actions/categories.actions';
import { API_URL } from '../../consts';
import { State } from '../reducers';

const fetchCategoriesEpic: Epic<
  CategoriesActions,
  CategoriesActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(CategoriesActionsTypes.FETCH_CATEGORIES)),
    mergeMap(() =>
      from(ajax.get(`${API_URL}/sale/categories`)).pipe(
        map(response => categoriesFetched(response)),
        catchError((error: AjaxError) => of(categoriesFetchingFailed(error)))
      )
    )
  );

export default combineEpics(fetchCategoriesEpic);
