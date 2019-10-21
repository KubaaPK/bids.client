import { AjaxError } from 'rxjs/ajax';

export enum DeleteCategoryActionTypes {
  DELETE_CATEGORY = 'categories/DELETE_CATEGORY',
  CATEGORY_DELETED = 'categories/CATEGORY_DELETED',
  CATEGORY_DELETING_FAILED = 'categories/CATEGORY_DELETING_FAILED'
}

export type DeleteCategoryAction = {
  type: DeleteCategoryActionTypes.DELETE_CATEGORY;
  payload: string;
};

export type CategoryDeletedAction = {
  type: DeleteCategoryActionTypes.CATEGORY_DELETED;
};

export type CategoryDeletingFailedAction = {
  type: DeleteCategoryActionTypes.CATEGORY_DELETING_FAILED;
  payload: AjaxError;
};

export function deleteCategory(id: string): DeleteCategoryAction {
  return {
    type: DeleteCategoryActionTypes.DELETE_CATEGORY,
    payload: id
  };
}

export function categoryDeleted(): CategoryDeletedAction {
  return {
    type: DeleteCategoryActionTypes.CATEGORY_DELETED
  };
}

export function deletingCategoryFailed(
  error: AjaxError
): CategoryDeletingFailedAction {
  return {
    type: DeleteCategoryActionTypes.CATEGORY_DELETING_FAILED,
    payload: error
  };
}

export type DeleteCategoryActions =
  | DeleteCategoryAction
  | CategoryDeletedAction
  | CategoryDeletingFailedAction;
