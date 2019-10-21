import { combineReducers } from 'redux';
import deleteCategoryReducer, {
  DeleteCategoryState,
  initialDeleteCategoryState
} from './delete-category.reducer';
import fetchCategoriesReducer, {
  initialFetchCategoriesState,
  FetchCategoriesState
} from './fetch-categories.reducer';
import addCategoryReducer, {
  AddCategoryState,
  initialAddCategoryState
} from './add-category.reducer';

export type CategoriesState = {
  fetchCategories: FetchCategoriesState;
  deleteCategory: DeleteCategoryState;
  addCategory: AddCategoryState;
};

export const initialCategoryState: CategoriesState = {
  deleteCategory: initialDeleteCategoryState,
  fetchCategories: initialFetchCategoriesState,
  addCategory: initialAddCategoryState
};

export default combineReducers({
  fetchCategories: fetchCategoriesReducer,
  deleteCategory: deleteCategoryReducer,
  addCategory: addCategoryReducer
});
