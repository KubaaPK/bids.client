import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { filter, mergeMap, catchError, map } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { State } from '../../reducers';
import {
  AssignParameterActionTypes,
  AssignParameterActions,
  parameterAssigned,
  assigningParameterFailed
} from '../../actions/categories/assign-parameter.action';
import { API_URL } from '../../../consts';

const assignParameter: Epic<
  AssignParameterActions,
  AssignParameterActions,
  State
> = action$ =>
  action$.pipe(
    filter(isOfType(AssignParameterActionTypes.ASSIGN_PARAMETER)),
    mergeMap(action =>
      from(
        ajax.post(
          `${API_URL}/sale/categories/${action.payload.categoryId}/parameters`,
          { parameterId: action.payload.parameterId },
          { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
        )
      ).pipe(
        map((response: AjaxResponse) => parameterAssigned(response)),
        catchError((error: AjaxError) => of(assigningParameterFailed(error)))
      )
    )
  );

export default assignParameter;
