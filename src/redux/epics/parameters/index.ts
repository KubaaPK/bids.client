import { combineEpics } from 'redux-observable';
import addParameterEpic from './add-parameter.epic';
import fetchParametersEpic from './fetch-parameters.epic';

export default combineEpics(addParameterEpic, fetchParametersEpic);
