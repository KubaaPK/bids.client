import { combineReducers } from 'redux';
import addParameterReducer, {
  AddParameterState,
  initialAddParameterState
} from './add-parameter.reducer';
import fetchParametersReducer, {
  FetchParametersState,
  initialFetchParametersState
} from './fetch-parameters.reducer';

export type ParametersState = {
  addParameter: AddParameterState;
  fetchParameters: FetchParametersState;
};

export const initialParametersState: ParametersState = {
  addParameter: initialAddParameterState,
  fetchParameters: initialFetchParametersState
};

export default combineReducers({
  addParameter: addParameterReducer,
  fetchParameters: fetchParametersReducer
});
