import { all, call } from 'redux-saga/effects';
import { databaseSaga } from './Database/sagas';
import { registerSaga } from './Form/sagas';
import { signUpSaga } from './SignUp/sagas';

function* rootSagas() {
    yield all([call(databaseSaga), call(signUpSaga), call(registerSaga)]);
}

export default rootSagas