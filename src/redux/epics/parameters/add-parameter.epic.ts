import { Epic } from 'redux-observable';
import { of, from } from 'rxjs';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { State } from '../../reducers';
import {
  AddParameterActionTypes,
  AddParameterActions,
  parameterAdded,
  addingParameterFailed
} from '../../actions/parameters/add-parameter.action';
import { API_URL } from '../../../consts';

const addParameterEpic: Epic<
  AddParameterActions,
  AddParameterActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(AddParameterActionTypes.ADD_PARAMETER)),
    mergeMap(action =>
      from(
        ajax.post(`${API_URL}/sale/parameters`, action.payload, {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access-token')}`
        })
      ).pipe(
        map((response: AjaxResponse) => parameterAdded(response)),
        catchError((error: AjaxError) => of(addingParameterFailed(error)))
      )
    )
  );

export default addParameterEpic;
