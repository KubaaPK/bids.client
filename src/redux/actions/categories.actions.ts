import { AjaxResponse, AjaxError } from 'rxjs/ajax';

export enum CategoriesActionsTypes {
  FETCH_CATEGORIES = 'categories/fetch-categories',
  FETCHING_CATEGORIES = 'categories/fetching-categories',
  CATEGORIES_FETCHED = 'categories/categories-fetched',
  CATEGORIES_FETCHING_FAILED = 'categories/categories-fetching-failed'
}

export type FetchCategoriesAction = {
  type: CategoriesActionsTypes.FETCH_CATEGORIES;
};

export type FetchingCategoriesAction = {
  type: CategoriesActionsTypes.FETCHING_CATEGORIES;
};

export type CategoriesFetchedAction = {
  type: CategoriesActionsTypes.CATEGORIES_FETCHED;
  payload: AjaxResponse;
};

export type CategoriesFetchingFailedAction = {
  type: CategoriesActionsTypes.CATEGORIES_FETCHING_FAILED;
  payload: AjaxError;
};

export function fetchCategories(): FetchCategoriesAction {
  return {
    type: CategoriesActionsTypes.FETCH_CATEGORIES
  };
}

export function fetchingCategories(): FetchingCategoriesAction {
  return {
    type: CategoriesActionsTypes.FETCHING_CATEGORIES
  };
}

export function categoriesFetched(
  categories: AjaxResponse
): CategoriesFetchedAction {
  return {
    type: CategoriesActionsTypes.CATEGORIES_FETCHED,
    payload: categories
  };
}

export function categoriesFetchingFailed(
  error: AjaxError
): CategoriesFetchingFailedAction {
  return {
    type: CategoriesActionsTypes.CATEGORIES_FETCHING_FAILED,
    payload: error
  };
}

export type CategoriesActions =
  | FetchingCategoriesAction
  | FetchCategoriesAction
  | CategoriesFetchedAction
  | CategoriesFetchingFailedAction;
