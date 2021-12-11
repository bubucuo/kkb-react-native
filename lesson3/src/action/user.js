import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REQUEST,
  LOGIN_FAILURE,
  LOGIN_SAGA,
} from '../store/const';
import LoginService from '@/service/login';

// export const login = userInfo => dispatch =>
//   dispatch({type: LOGIN_SUCCESS, payload: userInfo});

// export const logout = () => ({type: LOGOUT_SUCCESS});

// export const getMoreUserInfo = (dispatch, userInfo) => {
//   LoginService.getMoreUserInfo(userInfo).then(
//     res => {
//       dispatch({type: LOGIN_SUCCESS, payload: res});
//     },
//     err => {
//       dispatch({type: LOGIN_FAILURE, payload: err});
//     },
//   );
// };

// export const loginPromise = (dispatch, userInfo) => {
//   return LoginService.login(userInfo).then(
//     res => {
//       return res;
//     },
//     err => {
//       dispatch({type: LOGIN_FAILURE, payload: err});
//     },
//   );
// };

// export const login = userInfo => dispatch => {
//   dispatch({type: REQUEST});
//   LoginService.login(userInfo).then(
//     res => {
//       getMoreUserInfo(dispatch, res);
//     },
//     err => {
//       dispatch({type: LOGIN_FAILURE, payload: err});
//     },
//   );
// };

// export const login = userInfo => ({type: LOGIN_SAGA, payload: userInfo});

export const login = userInfo => ({type: LOGIN_SAGA, payload: userInfo});
