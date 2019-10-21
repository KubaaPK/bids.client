import { combineReducers } from 'redux';
import deleteCategoryReducer, {
  DeleteCategoryState,
  initialDeleteCategoryState
} from './delete-category.reducer';
import fetchCategoriesReducer, {
  initialFetchCategoriesState,
  FetchCategoriesState
} from './fetch-categories.reducer';

export type CategoriesState = {
  fetchCategories: FetchCategoriesState;
  deleteCategory: DeleteCategoryState;
};

export const initialCategoryState: CategoriesState = {
  deleteCategory: initialDeleteCategoryState,
  fetchCategories: initialFetchCategoriesState
};

export default combineReducers({
  fetchCategories: fetchCategoriesReducer,
  deleteCategory: deleteCategoryReducer
});
