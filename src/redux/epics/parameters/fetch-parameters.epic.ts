import { from, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { mergeMap, map, catchError, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import {
  FetchParametersActions,
  FetchParametersActionTypes,
  parametersFetched,
  fetchinParametersFailed
} from '../../actions/parameters/fetch-parameters.action';
import { State } from '../../reducers';
import { API_URL } from '../../../consts';

const fetchParametersEpic: Epic<
  FetchParametersActions,
  FetchParametersActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(FetchParametersActionTypes.FETCH_PARAMETERS)),
    mergeMap(() =>
      from(
        ajax.getJSON(`${API_URL}/sale/parameters`, {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map((response: any) => parametersFetched(response)),
        catchError((error: AjaxError) => of(fetchinParametersFailed(error)))
      )
    )
  );

export default fetchParametersEpic;
