import { AjaxError } from 'rxjs/ajax';
import { Parameter } from './fetch-parameters.action';

export enum FetchCategoryParametersActionTypes {
  FETCH_CATEGORY_PARAMETERS = 'parameters/FETCH_CATEGORY_PARAMETERS',
  FETCHING_CATEGORY_PARAMETERS = 'parameters/FETCHING_CATEGORY_PARAMETERS',
  CATEGORY_PARAMETERS_FETCHED = 'parameters/CATEGORY_PARAMETERS_FETCHED',
  FETCHING_CATEGORY_PARAMETERS_FAILED = 'parameters/FETCHING_CATEGORY_PARAMETERS_FAILED'
}

type FetchCategoryParametersAction = {
  type: FetchCategoryParametersActionTypes.FETCH_CATEGORY_PARAMETERS;
  payload: string;
};

type FetchingCategoryParametersAction = {
  type: FetchCategoryParametersActionTypes.FETCHING_CATEGORY_PARAMETERS;
};

type CategoryParametersFetchedAction = {
  type: FetchCategoryParametersActionTypes.CATEGORY_PARAMETERS_FETCHED;
  payload: Parameter[];
};

type FetchingCategoryParametersFailedAction = {
  type: FetchCategoryParametersActionTypes.FETCHING_CATEGORY_PARAMETERS_FAILED;
  payload: AjaxError;
};

export function fetchCategoryParameters(
  categoryId: string
): FetchCategoryParametersAction {
  return {
    type: FetchCategoryParametersActionTypes.FETCH_CATEGORY_PARAMETERS,
    payload: categoryId
  };
}

export function fetchingCategoryParameters(): FetchingCategoryParametersAction {
  return {
    type: FetchCategoryParametersActionTypes.FETCHING_CATEGORY_PARAMETERS
  };
}

export function categoryParametersFetched(
  parameters: Parameter[]
): CategoryParametersFetchedAction {
  return {
    type: FetchCategoryParametersActionTypes.CATEGORY_PARAMETERS_FETCHED,
    payload: parameters
  };
}

export function fetchingCategoryParametersFailed(
  error: AjaxError
): FetchingCategoryParametersFailedAction {
  return {
    type:
      FetchCategoryParametersActionTypes.FETCHING_CATEGORY_PARAMETERS_FAILED,
    payload: error
  };
}

export type FetchCategoryParametersActions =
  | FetchCategoryParametersAction
  | FetchingCategoryParametersAction
  | CategoryParametersFetchedAction
  | FetchingCategoryParametersFailedAction;
