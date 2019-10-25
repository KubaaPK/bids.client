import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { State } from '../../reducers';
import {
  FetchCategoryParametersActionTypes,
  FetchCategoryParametersActions,
  categoryParametersFetched,
  fetchingCategoryParametersFailed
} from '../../actions/parameters/fetch-category-parameters.action';
import { API_URL } from '../../../consts';

const fetchCategoryParameters: Epic<
  FetchCategoryParametersActions,
  FetchCategoryParametersActions,
  State
> = action$ =>
  action$.pipe(
    filter(
      isOfType(FetchCategoryParametersActionTypes.FETCH_CATEGORY_PARAMETERS)
    ),
    mergeMap(action =>
      from(
        ajax.getJSON(`${API_URL}/sale/categories/${action.payload}/parameters`)
      ).pipe(
        map((response: any) => categoryParametersFetched(response)),
        catchError((error: AjaxError) =>
          of(fetchingCategoryParametersFailed(error))
        )
      )
    )
  );

export default fetchCategoryParameters;
