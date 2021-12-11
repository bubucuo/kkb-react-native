import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginReducer} from './loginReducer';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {loginSaga} from '@/action/loginSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({user: loginReducer}),
  applyMiddleware(thunk, sagaMiddleware),
);

sagaMiddleware.run(loginSaga);

export default store;
