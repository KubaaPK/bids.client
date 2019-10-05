import { combineEpics } from 'redux-observable';
import accountsEpics from './accounts.epic';

const rootEpic = combineEpics(accountsEpics);
export default rootEpic;
