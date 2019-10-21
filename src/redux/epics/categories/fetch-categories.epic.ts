import { Epic } from 'redux-observable';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { isOfType } from 'typesafe-actions';
import {
  FetchCategoriesActions,
  FetchCategoriesActionsTypes,
  categoriesFetched,
  categoriesFetchingFailed
} from '../../actions/categories/fetch-categories.actions';
import { API_URL } from '../../../consts';
import { State } from '../../reducers';

const fetchCategoriesEpic: Epic<
  FetchCategoriesActions,
  FetchCategoriesActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchCategoriesActionsTypes.FETCH_CATEGORIES)),
    mergeMap(() =>
      from(ajax.get(`${API_URL}/sale/categories`)).pipe(
        map(response => categoriesFetched(response)),
        catchError((error: AjaxError) => of(categoriesFetchingFailed(error)))
      )
    )
  );

export default fetchCategoriesEpic;
