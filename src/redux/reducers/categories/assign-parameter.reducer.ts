import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  AssignParameterActionTypes,
  AssignParameterActions
} from '../../actions/categories/assign-parameter.action';

export type AssignParameterState = {
  assigningParameter: boolean;
  assignedParameter: AjaxResponse | undefined;
  assigningParameterFailed: AjaxError | undefined;
};

export const initialAssignParameterState: AssignParameterState = {
  assigningParameter: false,
  assignedParameter: undefined,
  assigningParameterFailed: undefined
};

export default function(
  state: AssignParameterState = initialAssignParameterState,
  action: AssignParameterActions
): AssignParameterState {
  switch (action.type) {
    case AssignParameterActionTypes.ASSIGN_PARAMETER:
    case AssignParameterActionTypes.ASSIGNING_PARAMETER:
      return { ...state, assigningParameter: true };
    case AssignParameterActionTypes.PARAMETER_ASSIGNED:
      return {
        ...state,
        assigningParameter: false,
        assignedParameter: action.payload
      };
    case AssignParameterActionTypes.ASSIGNING_PARAMETER_FAILED:
      return {
        ...state,
        assigningParameter: false,
        assigningParameterFailed: action.payload
      };
    default:
      return state;
  }
}
