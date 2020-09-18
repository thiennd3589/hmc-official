import { takeLatest, call, put, all } from 'redux-saga/effects';
import { database } from '../../firebase/firebase.utils';
import { GET_ALL_DATABASE } from './actions';
import {  queryDatabaseFailure, queryAllDatabaseSuccess } from './actions';

function* queryDatabaseStart() {
    yield takeLatest(GET_ALL_DATABASE, queryDatabase);
}

function* queryDatabase() {
    const data = [];
    try {
        const snapshot = yield database.collection('HumanResources').get();
        yield snapshot.forEach(doc => {
            data.push(doc.data());
        });
        yield put(queryAllDatabaseSuccess(data));
    } catch (error) {
        yield put(queryDatabaseFailure(error))
    }
}




export function* databaseSaga() {
    yield all([call(queryDatabaseStart)])
}