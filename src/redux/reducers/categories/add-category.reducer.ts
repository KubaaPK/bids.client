import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  AddCategoryActionTypes,
  AddCategoryActions
} from '../../actions/categories/add-category.actions';

export type AddCategoryState = {
  categoryIsAdding: boolean;
  categoryAdded: AjaxResponse | undefined;
  addingCategoryFailed: AjaxError | undefined;
};

export const initialAddCategoryState: AddCategoryState = {
  categoryIsAdding: false,
  categoryAdded: undefined,
  addingCategoryFailed: undefined
};

export default function addCategoryReducer(
  state: AddCategoryState = initialAddCategoryState,
  action: AddCategoryActions
): AddCategoryState {
  switch (action.type) {
    case AddCategoryActionTypes.ADD_CATEGORY:
      return { ...state, categoryIsAdding: true };
    case AddCategoryActionTypes.CATEGORY_ADDED:
      return {
        ...state,
        categoryIsAdding: false,
        categoryAdded: action.payload
      };
    case AddCategoryActionTypes.ADDING_CATEGORY_FAILED:
      return {
        ...state,
        categoryIsAdding: false,
        addingCategoryFailed: action.payload
      };
    default:
      return state;
  }
}
