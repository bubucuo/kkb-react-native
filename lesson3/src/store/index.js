import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import loginSaga from '../action/loginSaga';
import {loginReducer} from './loginReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({user: loginReducer}),
  applyMiddleware(thunk, sagaMiddleware),
);

sagaMiddleware.run(loginSaga);

export default store;
