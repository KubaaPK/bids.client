import { AjaxError, AjaxResponse } from 'rxjs/ajax';

export type NewCategory = {
  name: string;
  parent?: {
    id: string;
  };
};

export enum AddCategoryActionTypes {
  ADD_CATEGORY = 'categories/ADD_CATEGORY',
  CATEGORY_IS_ADDING = 'categories/CATEGORY_IS_ADDING',
  CATEGORY_ADDED = 'categories/CATEGORY_ADDED',
  ADDING_CATEGORY_FAILED = 'categories/ADDING_CATEGORY_FAILED'
}

export type AddCategoryAction = {
  type: AddCategoryActionTypes.ADD_CATEGORY;
  payload: NewCategory;
};

export type CategoryIsAddingAction = {
  type: AddCategoryActionTypes.CATEGORY_IS_ADDING;
};

export type CategoryAddedAction = {
  type: AddCategoryActionTypes.CATEGORY_ADDED;
  payload: AjaxResponse;
};

export type AddingCategoryFailedAction = {
  type: AddCategoryActionTypes.ADDING_CATEGORY_FAILED;
  payload: AjaxError;
};

export function addCategory(newCategory: NewCategory): AddCategoryAction {
  return {
    type: AddCategoryActionTypes.ADD_CATEGORY,
    payload: newCategory
  };
}

export function categoryIsAdding(): CategoryIsAddingAction {
  return {
    type: AddCategoryActionTypes.CATEGORY_IS_ADDING
  };
}

export function categoryAdded(response: AjaxResponse): CategoryAddedAction {
  return {
    type: AddCategoryActionTypes.CATEGORY_ADDED,
    payload: response
  };
}

export function addingCategoryFailed(
  error: AjaxError
): AddingCategoryFailedAction {
  return {
    type: AddCategoryActionTypes.ADDING_CATEGORY_FAILED,
    payload: error
  };
}

export type AddCategoryActions =
  | AddCategoryAction
  | CategoryIsAddingAction
  | CategoryAddedAction
  | AddingCategoryFailedAction;
