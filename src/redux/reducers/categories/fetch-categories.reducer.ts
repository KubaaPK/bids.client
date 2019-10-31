import { AjaxError } from 'rxjs/ajax';
import {
  FetchCategoriesActions,
  FetchCategoriesActionsTypes
} from '../../actions/categories/fetch-categories.actions';
import * as Models from '../../../models';

export type FetchCategoriesState = {
  fetchingCategories: boolean;
  categories: Models.Categories.Category[];
  fetchingCategoriesFailed: AjaxError | undefined;
};

export const initialFetchCategoriesState: FetchCategoriesState = {
  fetchingCategories: true,
  categories: [],
  fetchingCategoriesFailed: undefined
};

export default function fetchCategoriesReducer(
  state: FetchCategoriesState = initialFetchCategoriesState,
  action: FetchCategoriesActions
) {
  switch (action.type) {
    case FetchCategoriesActionsTypes.FETCH_CATEGORIES:
    case FetchCategoriesActionsTypes.FETCHING_CATEGORIES:
      return { ...state, fetchingCategories: true };
    case FetchCategoriesActionsTypes.CATEGORIES_FETCHED:
      return {
        ...state,
        categories: action.payload,
        fetchingCategories: false
      };
    case FetchCategoriesActionsTypes.CATEGORIES_FETCHING_FAILED:
      return {
        ...state,
        fetchingCategories: false,
        fetchingCategoriesFailed: action.payload
      };
    default:
      return state;
  }
}
