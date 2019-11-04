import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchParametersActionTypes {
  FETCH_PARAMETERS = 'parameters/fetch-parameters',
  FETCHING_PARAMETERS = 'parameters/fetching-parameters',
  PARAMETERS_FETCHED = 'parameters/parameters-fetched',
  FETCHING_PARAMETERS_FAILED = 'parameters/fetching-parameters-failed'
}

type FetchParametersAction = {
  type: FetchParametersActionTypes.FETCH_PARAMETERS;
};

type FetchingParametersAction = {
  type: FetchParametersActionTypes.FETCHING_PARAMETERS;
};

type ParametersFetchedAction = {
  type: FetchParametersActionTypes.PARAMETERS_FETCHED;
  payload: Models.Categories.Parameter[];
};

type FetchingParametersFailedAction = {
  type: FetchParametersActionTypes.FETCHING_PARAMETERS_FAILED;
  payload: AjaxError;
};

export function fetchParameters(): FetchParametersAction {
  return {
    type: FetchParametersActionTypes.FETCH_PARAMETERS
  };
}

export function fetchingParameters(): FetchingParametersAction {
  return {
    type: FetchParametersActionTypes.FETCHING_PARAMETERS
  };
}

export function parametersFetched(
  parameters: Models.Categories.Parameter[]
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
  | FetchingParametersAction
  | ParametersFetchedAction
  | FetchingParametersFailedAction;
