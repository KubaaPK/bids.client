import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import {
  CategoriesActions,
  CategoriesActionsTypes
} from '../actions/categories.actions';

export type CategoriesState = {
  areCategoriesFetching: boolean;
  categoriesFetched: AjaxResponse | undefined;
  categoriesFetchingFailed: AjaxError | undefined;
};

export const initialCategoriesState: CategoriesState = {
  areCategoriesFetching: true,
  categoriesFetched: undefined,
  categoriesFetchingFailed: undefined
};

export default function categoriesReducer(
  state: CategoriesState = initialCategoriesState,
  action: CategoriesActions
) {
  switch (action.type) {
    case CategoriesActionsTypes.FETCH_CATEGORIES:
      return { ...state, areCategoriesFetching: true };
    case CategoriesActionsTypes.FETCHING_CATEGORIES:
      return { ...state, areCategoriesFetching: true };
    case CategoriesActionsTypes.CATEGORIES_FETCHED:
      return {
        ...state,
        categoriesFetched: action.payload.response,
        areCategoriesFetching: false
      };
    case CategoriesActionsTypes.CATEGORIES_FETCHING_FAILED:
      return {
        ...state,
        areCategoriesFetching: false,
        categoriesFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
