import { combineEpics } from 'redux-observable';
import signInEpic from './sign-in.epic';

export default combineEpics(signInEpic);
