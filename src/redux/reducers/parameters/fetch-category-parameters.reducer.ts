import { AjaxError } from 'rxjs/ajax';
import { Parameter } from '../../actions/parameters/fetch-parameters.action';
import {
  FetchCategoryParametersActions,
  FetchCategoryParametersActionTypes
} from '../../actions/parameters/fetch-category-parameters.action';

export type FetchCategoryParametersState = {
  fetchingCategoryParameters: boolean;
  categoryParameters: Parameter[];
  fetchingCategoryParametersFailed: undefined | AjaxError;
};

export const initialFetchCategoryParametersState: FetchCategoryParametersState = {
  fetchingCategoryParameters: true,
  categoryParameters: [],
  fetchingCategoryParametersFailed: undefined
};

export default function fetchCategoryParametersReducer(
  state: FetchCategoryParametersState = initialFetchCategoryParametersState,
  action: FetchCategoryParametersActions
): FetchCategoryParametersState {
  switch (action.type) {
    case FetchCategoryParametersActionTypes.FETCH_CATEGORY_PARAMETERS:
    case FetchCategoryParametersActionTypes.FETCHING_CATEGORY_PARAMETERS:
      return { ...state, fetchingCategoryParameters: true };
    case FetchCategoryParametersActionTypes.CATEGORY_PARAMETERS_FETCHED:
      return {
        ...state,
        fetchingCategoryParameters: false,
        categoryParameters: action.payload
      };
    case FetchCategoryParametersActionTypes.FETCHING_CATEGORY_PARAMETERS_FAILED:
      return {
        ...state,
        fetchingCategoryParameters: false,
        fetchingCategoryParametersFailed: action.payload
      };
    default:
      return state;
  }
}
