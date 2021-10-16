// 调用异步操作 call、fork
//  状态更新put dispatch
// 做监听 take takeEvery

import {call, put, takeEvery, take, fork} from 'redux-saga/effects';
import LoginService from '@/service/login';
import {LOGIN_FAILURE, LOGIN_SAGA, LOGIN_SUCCESS, REQUEST} from '@/store/const';

// 做异步
function* loginHandle(action) {
  yield put({type: REQUEST});
  try {
    const res1 = yield call(LoginService.login, action.payload);
    const res2 = yield call(LoginService.getMoreUserInfo, res1);
    yield put({type: LOGIN_SUCCESS, payload: res2});
  } catch (err) {
    yield put({type: LOGIN_FAILURE, payload: err});
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle);
}

export default loginSaga;
