import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import {
  DeleteCategoryActions,
  DeleteCategoryActionTypes
} from '../../actions/categories/delete-category.actions';

export type DeleteCategoryState = {
  isCategoryDeleting: boolean;
  categoryDeleted: undefined | AjaxResponse;
  categoryDeletingFailed: AjaxError | undefined;
};

export const initialDeleteCategoryState: DeleteCategoryState = {
  isCategoryDeleting: false,
  categoryDeleted: undefined,
  categoryDeletingFailed: undefined
};

export default function deleteCategoryReducer(
  state: DeleteCategoryState = initialDeleteCategoryState,
  action: DeleteCategoryActions
) {
  switch (action.type) {
    case DeleteCategoryActionTypes.DELETE_CATEGORY:
      return { ...state, isCategoryDeleting: true };
    case DeleteCategoryActionTypes.CATEGORY_DELETED:
      return {
        ...state,
        isCategoryDeleting: false,
        categoryDeleted: action.payload
      };
    case DeleteCategoryActionTypes.CATEGORY_DELETING_FAILED:
      return {
        ...state,
        isCategoryDeleting: false,
        categoryDeletingFailed: action.payload
      };
    default:
      return state;
  }
}
