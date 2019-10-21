import { combineEpics } from 'redux-observable';
import fetchCategoriesEpic from './fetch-categories.epic';
import deleteCategoryEpic from './delete-category.epic';
import addCategoryEpic from './add-category.epic';

export default combineEpics(
  fetchCategoriesEpic,
  deleteCategoryEpic,
  addCategoryEpic
);
