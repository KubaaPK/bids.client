import { AjaxError } from 'rxjs/ajax';
import * as Models from '../../../models';

export enum FetchCategoriesActionsTypes {
  FETCH_CATEGORIES = 'categories/fetch-categories',
  FETCHING_CATEGORIES = 'categories/fetching-categories',
  CATEGORIES_FETCHED = 'categories/categories-fetched',
  CATEGORIES_FETCHING_FAILED = 'categories/categories-fetching-failed'
}

export type FetchCategoriesAction = {
  type: FetchCategoriesActionsTypes.FETCH_CATEGORIES;
};

export type FetchingCategoriesAction = {
  type: FetchCategoriesActionsTypes.FETCHING_CATEGORIES;
};

export type CategoriesFetchedAction = {
  type: FetchCategoriesActionsTypes.CATEGORIES_FETCHED;
  payload: Models.Categories.Category[];
};

export type CategoriesFetchingFailedAction = {
  type: FetchCategoriesActionsTypes.CATEGORIES_FETCHING_FAILED;
  payload: AjaxError;
};

export function fetchCategories(): FetchCategoriesAction {
  return {
    type: FetchCategoriesActionsTypes.FETCH_CATEGORIES
  };
}

export function fetchingCategories(): FetchingCategoriesAction {
  return {
    type: FetchCategoriesActionsTypes.FETCHING_CATEGORIES
  };
}

export function categoriesFetched(
  categories: Models.Categories.Category[]
): CategoriesFetchedAction {
  return {
    type: FetchCategoriesActionsTypes.CATEGORIES_FETCHED,
    payload: categories
  };
}

export function categoriesFetchingFailed(
  error: AjaxError
): CategoriesFetchingFailedAction {
  return {
    type: FetchCategoriesActionsTypes.CATEGORIES_FETCHING_FAILED,
    payload: error
  };
}

export type FetchCategoriesActions =
  | FetchingCategoriesAction
  | FetchCategoriesAction
  | CategoriesFetchedAction
  | CategoriesFetchingFailedAction;
