import * as types from '../../../utils/Constants';

export const checkTokenSuccess = (token) => ({
  type: types.CHECK_TOKEN_SUCCESS,
  payload: token,
});

export const checkTokenStart = () => ({
  type: types.CHECK_TOKEN_START,
});

export const logInStart = (credentials) => ({
  type: types.SIGNIN_RESONSE,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.SIGNIN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: types.SIGNIN_FAILURE,
  payload: error,
});

export const registerStart = (credentials) => ({
  type: types.SIGNUP_RESONSE,
  payload: credentials,
});

export const registerSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const logOutSucess = () => ({
  type: types.LOG_OUT_SUCCESS,
});
