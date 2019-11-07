import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum AddParameterActionTypes {
  ADD_PARAMETER = 'parameters/ADD_PARAMETER',
  ADDING_PARAMETER = 'parameters/PARAMETER_IS_ADDING',
  PARAMETER_ADDED = 'parameters/PARAMETER_ADDED',
  ADDING_PARAMETER_FAILED = 'parameters/ADDING_PARAMETER_FAILED'
}

type AddParameterAction = {
  type: AddParameterActionTypes.ADD_PARAMETER;
  payload: Models.Categories.NewParameter;
};

type AddingParameterAction = {
  type: AddParameterActionTypes.ADDING_PARAMETER;
};

type ParameterAddedAction = {
  type: AddParameterActionTypes.PARAMETER_ADDED;
  payload: AjaxResponse;
};

type AddingParameterFailedAction = {
  type: AddParameterActionTypes.ADDING_PARAMETER_FAILED;
  payload: AjaxError;
};

export function addParameter(
  newParameter: Models.Categories.NewParameter
): AddParameterAction {
  return {
    type: AddParameterActionTypes.ADD_PARAMETER,
    payload: newParameter
  };
}

export function addingParameter(): AddingParameterAction {
  return {
    type: AddParameterActionTypes.ADDING_PARAMETER
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
  | AddingParameterAction
  | ParameterAddedAction
  | AddingParameterFailedAction;
