import AsyncStorage from '@react-native-community/async-storage';
import {put, call, takeEvery, takeLatest, all} from 'redux-saga/effects';
import * as actionTypes from '../../../utils/Constants';
import {storeToken} from '../../../utils/SessionManager';
import API from '../../QueryApi';
import * as actionCreators from './Actions';

// function* signup(action) {
//   try {
//     const signupResponse = yield call(API.post, '/signup/', action.payload);
//     yield put(actionCreators.signupSuccess(signupResponse));
//     yield call(storeToken, JSON.stringify(signupResponse));
//   } catch (e) {
//     console.log(e);
//     yield put(actionCreators.signupFailure(e));
//   }
// }

// function* signupSaga() {
//   yield takeEvery(actionTypes.SIGNUP_RESONSE, signup);
// }

export function* logInWithCredentials(action) {
  try {
    const user = yield call(API.post, '/signin/', action.payload);
    yield (storeToken, JSON.stringify(user));
    console.log(user);
    yield put(actionCreators.logInSuccess(user));
  } catch (error) {
    yield put(actionCreators.logInFailure(error));
  }
}

export function* registerWithCredentials(action) {
  try {
    const user = yield call(API.post, '/signup/', action.payload);
    console.log(user);
    yield put(actionCreators.registerSuccess(user));
  } catch (error) {
    yield put(actionCreators.registerFailure(error));
  }
}

export function* logInAfterRegister(action) {
  yield logInWithCredentials(action.payload);
}

export function* onLogInStart() {
  yield takeLatest(actionTypes.SIGNIN_RESONSE, logInWithCredentials);
}

export function* onRegisterStart() {
  yield takeLatest(actionTypes.SIGNUP_RESONSE, registerWithCredentials);
}

export function* onRegisterSuccess() {
  yield takeLatest(actionTypes.SIGNUP_SUCCESS, logInAfterRegister);
}

export function* authSaga() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
  ]);
}
