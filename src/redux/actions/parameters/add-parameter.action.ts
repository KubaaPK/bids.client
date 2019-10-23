import { AjaxResponse, AjaxError } from 'rxjs/ajax';

export enum ParameterType {
  INTEGER = 'integer',
  SINGLE_STRING = 'single-string',
  DICTIONARY = 'DICTIONARY',
  FLOAT = 'float',
  FLOAT_RANGE = 'float-range'
}

export type NewParameter = {
  name: string;
  type: ParameterType;
  required?: boolean;
  unit: string;
  restrictions: {
    min?: number;
    max?: number;
    precision?: number;
    minLength?: number;
    maxLength?: number;
    multipleChoices?: boolean;
  };
};

export enum AddParameterActionTypes {
  ADD_PARAMETER = 'parameters/ADD_PARAMETER',
  PARAMETER_IS_ADDING = 'parameters/PARAMETER_IS_ADDING',
  PARAMETER_ADDED = 'parameters/PARAMETER_ADDED',
  ADDING_PARAMETER_FAILED = 'parameters/ADDING_PARAMETER_FAILED'
}

export type AddParameterAction = {
  type: AddParameterActionTypes.ADD_PARAMETER;
  payload: NewParameter;
};

export type ParameterIsAddingAction = {
  type: AddParameterActionTypes.PARAMETER_IS_ADDING;
};

export type ParameterAddedAction = {
  type: AddParameterActionTypes.PARAMETER_ADDED;
  payload: AjaxResponse;
};

export type AddingParameterFailedAction = {
  type: AddParameterActionTypes.ADDING_PARAMETER_FAILED;
  payload: AjaxError;
};

export function addParameter(newParameter: NewParameter): AddParameterAction {
  return {
    type: AddParameterActionTypes.ADD_PARAMETER,
    payload: newParameter
  };
}

export function parameterIsAdding(): ParameterIsAddingAction {
  return {
    type: AddParameterActionTypes.PARAMETER_IS_ADDING
  };
}

export function parameterAdded(response: AjaxResponse): ParameterAddedAction {
  return {
    type: AddParameterActionTypes.PARAMETER_ADDED,
    payload: response
  };
}

export function addingParameterFailed(
  error: AjaxError
): AddingParameterFailedAction {
  return {
    type: AddParameterActionTypes.ADDING_PARAMETER_FAILED,
    payload: error
  };
}

export type AddParameterActions =
  | AddParameterAction
  | ParameterIsAddingAction
  | ParameterAddedAction
  | AddingParameterFailedAction;
