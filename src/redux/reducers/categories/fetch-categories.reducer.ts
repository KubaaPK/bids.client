import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import {
  FetchCategoriesActions,
  FetchCategoriesActionsTypes
} from '../../actions/categories/fetch-categories.actions';

export type FetchCategoriesState = {
  areCategoriesFetching: boolean;
  categoriesFetched: AjaxResponse | undefined;
  categoriesFetchingFailed: AjaxError | undefined;
};

export const initialFetchCategoriesState: FetchCategoriesState = {
  areCategoriesFetching: true,
  categoriesFetched: undefined,
  categoriesFetchingFailed: undefined
};

export default function fetchCategoriesReducer(
  state: FetchCategoriesState = initialFetchCategoriesState,
  action: FetchCategoriesActions
) {
  switch (action.type) {
    case FetchCategoriesActionsTypes.FETCH_CATEGORIES:
    case FetchCategoriesActionsTypes.FETCHING_CATEGORIES:
      return { ...state, areCategoriesFetching: true };
    case FetchCategoriesActionsTypes.CATEGORIES_FETCHED:
      return {
        ...state,
        categoriesFetched: action.payload.response,
        areCategoriesFetching: false
      };
    case FetchCategoriesActionsTypes.CATEGORIES_FETCHING_FAILED:
      return {
        ...state,
        areCategoriesFetching: false,
        categoriesFetchingFailed: action.payload
      };
    default:
      return state;
  }
}
