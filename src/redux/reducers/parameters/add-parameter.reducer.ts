import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  AddParameterActions,
  AddParameterActionTypes
} from '../../actions/parameters/add-parameter.action';

export type AddParameterState = {
  addingParameter: boolean;
  addedParameter: undefined | AjaxResponse;
  addingParameterFailed: undefined | AjaxError;
};

export const initialAddParameterState: AddParameterState = {
  addingParameter: false,
  addedParameter: undefined,
  addingParameterFailed: undefined
};

export default function addParameterReducer(
  state: AddParameterState = initialAddParameterState,
  action: AddParameterActions
): AddParameterState {
  switch (action.type) {
    case AddParameterActionTypes.ADD_PARAMETER:
    case AddParameterActionTypes.ADDING_PARAMETER:
      return { ...state, addingParameter: true };
    case AddParameterActionTypes.PARAMETER_ADDED:
      return {
        ...state,
        addedParameter: action.payload,
        addingParameter: false
      };
    case AddParameterActionTypes.ADDING_PARAMETER_FAILED:
      return {
        ...state,
        addingParameter: false,
        addingParameterFailed: action.payload
      };

    default:
      return state;
  }
}
