import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  AddParameterActions,
  AddParameterActionTypes
} from '../../actions/parameters/add-parameter.action';

export type AddParameterState = {
  parameterIsAdding: boolean;
  parameterAdded: undefined | AjaxResponse;
  addingParameterFailed: undefined | AjaxError;
};

export const initialAddParameterState: AddParameterState = {
  parameterIsAdding: false,
  parameterAdded: undefined,
  addingParameterFailed: undefined
};

export default function addParameterReducer(
  state: AddParameterState = initialAddParameterState,
  action: AddParameterActions
): AddParameterState {
  switch (action.type) {
    case AddParameterActionTypes.ADD_PARAMETER:
    case AddParameterActionTypes.PARAMETER_IS_ADDING:
      return { ...state, parameterIsAdding: true };
    case AddParameterActionTypes.PARAMETER_ADDED:
      return {
        ...state,
        parameterAdded: action.payload,
        parameterIsAdding: false
      };
    case AddParameterActionTypes.ADDING_PARAMETER_FAILED:
      return {
        ...state,
        parameterIsAdding: false,
        addingParameterFailed: action.payload
      };

    default:
      return state;
  }
}
