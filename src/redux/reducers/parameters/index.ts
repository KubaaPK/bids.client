import { combineReducers } from 'redux';
import addParameterReducer, {
  AddParameterState,
  initialAddParameterState
} from './add-parameter.reducer';
import fetchParametersReducer, {
  FetchParametersState,
  initialFetchParametersState
} from './fetch-parameters.reducer';
import fetchCategoryParametersReducer, {
  FetchCategoryParametersState,
  initialFetchCategoryParametersState
} from './fetch-category-parameters.reducer';

export type ParametersState = {
  addParameter: AddParameterState;
  fetchParameters: FetchParametersState;
  fetchCategoryParameters: FetchCategoryParametersState;
};

export const initialParametersState: ParametersState = {
  addParameter: initialAddParameterState,
  fetchParameters: initialFetchParametersState,
  fetchCategoryParameters: initialFetchCategoryParametersState
};

export default combineReducers({
  addParameter: addParameterReducer,
  fetchParameters: fetchParametersReducer,
  fetchCategoryParameters: fetchCategoryParametersReducer
});
