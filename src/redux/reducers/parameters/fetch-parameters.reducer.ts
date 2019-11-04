import { AjaxError } from 'rxjs/ajax';
import {
  FetchParametersActionTypes,
  FetchParametersActions
} from '../../actions/parameters/fetch-parameters.action';
import * as Models from '../../../models';

export type FetchParametersState = {
  fetchingParameters: boolean;
  fetchedParameters: Models.Categories.Parameter[];
  fetchingParametersFailed: undefined | AjaxError;
};

export const initialFetchParametersState: FetchParametersState = {
  fetchingParameters: true,
  fetchedParameters: [],
  fetchingParametersFailed: undefined
};

export default function fetchParametersReducer(
  state: FetchParametersState = initialFetchParametersState,
  action: FetchParametersActions
): FetchParametersState {
  switch (action.type) {
    case FetchParametersActionTypes.FETCH_PARAMETERS:
    case FetchParametersActionTypes.FETCHING_PARAMETERS:
      return { ...state, fetchingParameters: true };
    case FetchParametersActionTypes.PARAMETERS_FETCHED:
      return {
        ...state,
        fetchingParameters: false,
        fetchedParameters: action.payload
      };
    case FetchParametersActionTypes.FETCHING_PARAMETERS_FAILED:
      return {
        ...state,
        fetchingParameters: false,
        fetchingParametersFailed: action.payload
      };
    default:
      return state;
  }
}
