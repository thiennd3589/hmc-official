import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducers from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,logger];

const store = createStore(rootReducers,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSagas);

export default store;
