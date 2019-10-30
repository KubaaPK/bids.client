import { combineEpics } from 'redux-observable';
import signUpEpic from './sign-up.epic';

export default combineEpics(signUpEpic);
