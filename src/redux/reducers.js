import { combineReducers } from 'redux';
import Database from './Database/reducers';
import SignUp from './SignUp/reducers';

const rootReducers = combineReducers({
    database: Database,
    signUp: SignUp
});

export default rootReducers;