import { combineReducers } from 'redux';
import Database from './Database/reducers';
import Register from './Form/reducers';
import SignUp from './SignUp/reducers';

const rootReducers = combineReducers({
    database: Database,
    signUp: SignUp,
    register: Register
});

export default rootReducers;