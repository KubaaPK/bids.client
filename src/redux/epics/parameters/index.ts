import { combineEpics } from 'redux-observable';
import addParameterEpic from './add-parameter.epic';
import fetchParametersEpic from './fetch-parameters.epic';
import fetchCategoryParametersEpic from './fetch-category-parameters.epic';

export default combineEpics(
  addParameterEpic,
  fetchParametersEpic,
  fetchCategoryParametersEpic
);
