import { takeLatest, all, call, put } from 'redux-saga/effects';
import { database } from '../../firebase/firebase.utils';
import { SIGN_UP, signUpSuccess, signUpFailure } from './actions';

function* signUpStart() {
    yield takeLatest(SIGN_UP, signUp);
}

function* signUp({ payload }) {
    try {
        const response = yield database.collection('HumanResources').doc().set(payload);
        yield console.log(response)
        yield put(signUpSuccess());
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signUpSaga() {
    yield all([call(signUpStart)]);
}