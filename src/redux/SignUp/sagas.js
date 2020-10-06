import { takeLatest, all, call, put } from 'redux-saga/effects';
import firebase from 'firebase/app'
import { SIGN_UP, signUpSuccess, signUpFailure } from './actions';

function* signUpStart() {
    yield takeLatest(SIGN_UP, signUp);
}

function* signUp({ payload }) {
    try {
        console.log(payload)
        const user = yield firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
        yield put(signUpSuccess(user))
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signUpSaga() {
    yield all([call(signUpStart)]);
}