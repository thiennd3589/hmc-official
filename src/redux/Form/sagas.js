import { takeLatest, all, call, put } from 'redux-saga/effects';
import { database } from '../../firebase/firebase.utils';
import { REGISTER, registerSuccess, registerFailure } from './actions';

function* registerStart() {
    yield takeLatest(REGISTER, register);
}

function* register({ payload }) {
    try {
        yield database.collection('HumanResources').doc().set(payload);
        yield put(registerSuccess());
    } catch (error) {
        yield put(registerFailure(error));
    }
}

export function* registerSaga() {
    yield all([call(registerStart)]);
}

