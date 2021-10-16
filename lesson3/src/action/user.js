import {LOGIN_SUCCESS} from '@/store/const';
import {LOGIN_SAGA, LOGOUT_SUCCESS} from '../store/const';

export const logout = () => ({type: LOGOUT_SUCCESS});

// export const login = (dispatch, userInfo) =>
//   dispatch({
//     type: LOGIN_SUCCESS,
//     payload: userInfo,
//   });

// thunk
// export const login = userInfo => dispatch =>
//   dispatch({
//     type: LOGIN_SUCCESS,
//     payload: userInfo,
//   });

export const login = userInfo => dispatch =>
  dispatch({
    type: LOGIN_SAGA,
    payload: userInfo,
  });
