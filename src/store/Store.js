import {createStore, applyMiddleware} from 'redux';
import {RootSaga} from '../model/RootSaga';
import {RootReducer} from '../model/ReducerRoot';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const Store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
