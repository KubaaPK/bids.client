import { AjaxError, AjaxResponse } from 'rxjs/ajax';

export enum AssignParameterActionTypes {
  ASSIGN_PARAMETER = 'categories/ASSIGN_PARAMETER',
  ASSIGNING_PARAMETER = 'categories/ASSIGNING_PARAMETER',
  PARAMETER_ASSIGNED = 'categories/PARAMETER_ASSIGNED',
  ASSIGNING_PARAMETER_FAILED = 'categories/ASSIGNING_PARAMETER_FAILED'
}

type AssignParameterAction = {
  type: AssignParameterActionTypes.ASSIGN_PARAMETER;
  payload: {
    categoryId: string;
    parameterId: string;
  };
};

type AssigningParameterAction = {
  type: AssignParameterActionTypes.ASSIGNING_PARAMETER;
};

type ParameterAssignedAction = {
  type: AssignParameterActionTypes.PARAMETER_ASSIGNED;
  payload: AjaxResponse;
};

type AssigningParameterFailedAction = {
  type: AssignParameterActionTypes.ASSIGNING_PARAMETER_FAILED;
  payload: AjaxError;
};

export function assignParameter({
  categoryId,
  parameterId
}: any): AssignParameterAction {
  return {
    type: AssignParameterActionTypes.ASSIGN_PARAMETER,
    payload: {
      categoryId,
      parameterId
    }
  };
}

export function assigningParameter(): AssigningParameterAction {
  return {
    type: AssignParameterActionTypes.ASSIGNING_PARAMETER
  };
}

export function parameterAssigned(
  response: AjaxResponse
): ParameterAssignedAction {
  return {
    type: AssignParameterActionTypes.PARAMETER_ASSIGNED,
    payload: response
  };
}

export function assigningParameterFailed(
  error: AjaxError
): AssigningParameterFailedAction {
  return {
    type: AssignParameterActionTypes.ASSIGNING_PARAMETER_FAILED,
    payload: error
  };
}

export type AssignParameterActions =
  | AssignParameterAction
  | AssigningParameterAction
  | ParameterAssignedAction
  | AssigningParameterFailedAction;
