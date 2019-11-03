import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import {
  AddCategoryActionTypes,
  AddCategoryActions
} from '../../actions/categories/add-category.actions';

export type AddCategoryState = {
  addingCategory: boolean;
  categoryAdded: AjaxResponse | undefined;
  addingCategoryFailed: AjaxError | undefined;
};

export const initialAddCategoryState: AddCategoryState = {
  addingCategory: false,
  categoryAdded: undefined,
  addingCategoryFailed: undefined
};

export default function addCategoryReducer(
  state: AddCategoryState = initialAddCategoryState,
  action: AddCategoryActions
): AddCategoryState {
  switch (action.type) {
    case AddCategoryActionTypes.ADD_CATEGORY:
      return { ...state, addingCategory: true };
    case AddCategoryActionTypes.CATEGORY_ADDED:
      return {
        ...state,
        addingCategory: false,
        categoryAdded: action.payload
      };
    case AddCategoryActionTypes.ADDING_CATEGORY_FAILED:
      return {
        ...state,
        addingCategory: false,
        addingCategoryFailed: action.payload
      };
    default:
      return state;
  }
}
