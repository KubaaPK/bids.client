import { AjaxError } from 'rxjs/ajax';
import {
  Parameter,
  FetchParametersActionTypes,
  FetchParametersActions
} from '../../actions/parameters/fetch-parameters.action';

export type FetchParametersState = {
  parametersAreFetching: boolean;
  parametersFetched: undefined | Parameter[];
  fetchingParametersFailed: undefined | AjaxError;
};

export const initialFetchParametersState: FetchParametersState = {
  parametersAreFetching: true,
  parametersFetched: undefined,
  fetchingParametersFailed: undefined
};

export default function fetchParametersReducer(
  state: FetchParametersState = initialFetchParametersState,
  action: FetchParametersActions
): FetchParametersState {
  switch (action.type) {
    case FetchParametersActionTypes.FETCH_PARAMETERS:
    case FetchParametersActionTypes.PARAMETERS_ARE_FETCHING:
      return { ...state, parametersAreFetching: true };
    case FetchParametersActionTypes.PARAMETERS_FETCHED:
      return {
        ...state,
        parametersAreFetching: false,
        parametersFetched: action.payload
      };
    case FetchParametersActionTypes.FETCHING_PARAMETERS_FAILED:
      return {
        ...state,
        parametersAreFetching: false,
        fetchingParametersFailed: action.payload
      };
    default:
      return state;
  }
}
