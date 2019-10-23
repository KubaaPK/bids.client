import { AjaxError } from 'rxjs/ajax';
import { ParameterType } from './add-parameter.action';

export type Parameter = {
  id: string;
  name: string;
  type: ParameterType;
  unit: string;
  required: boolean;
  dictionary: any[];
  restrictions: {
    min: string;
    max: string;
    precision: number;
    minLength: number;
    maxLength: number;
    multipleChoices: number;
  };
};

export enum FetchParametersActionTypes {
  FETCH_PARAMETERS = 'parameters/fetch-parameters',
  PARAMETERS_ARE_FETCHING = 'parameters/parameters-are-fetching',
  PARAMETERS_FETCHED = 'parameters/parameters-fetched',
  FETCHING_PARAMETERS_FAILED = 'parameters/fetching-parameters-failed'
}

export type FetchParametersAction = {
  type: FetchParametersActionTypes.FETCH_PARAMETERS;
};

export type ParametersAreFetchingAction = {
  type: FetchParametersActionTypes.PARAMETERS_ARE_FETCHING;
};

export type ParametersFetchedAction = {
  type: FetchParametersActionTypes.PARAMETERS_FETCHED;
  payload: Parameter[];
};

export type FetchingParametersFailedAction = {
  type: FetchParametersActionTypes.FETCHING_PARAMETERS_FAILED;
  payload: AjaxError;
};

export function fetchParameters(): FetchParametersAction {
  return {
    type: FetchParametersActionTypes.FETCH_PARAMETERS
  };
}

export function parametersAreFetching(): ParametersAreFetchingAction {
  return {
    type: FetchParametersActionTypes.PARAMETERS_ARE_FETCHING
  };
}

export function parametersFetched(
  parameters: Parameter[]
): ParametersFetchedAction {
  return {
    type: FetchParametersActionTypes.PARAMETERS_FETCHED,
    payload: parameters
  };
}

export function fetchinParametersFailed(
  error: AjaxError
): FetchingParametersFailedAction {
  return {
    type: FetchParametersActionTypes.FETCHING_PARAMETERS_FAILED,
    payload: error
  };
}

export type FetchParametersActions =
  | FetchParametersAction
  | ParametersAreFetchingAction
  | ParametersFetchedAction
  | FetchingParametersFailedAction;
