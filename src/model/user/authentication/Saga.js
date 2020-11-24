import AsyncStorage from '@react-native-community/async-storage';
import {put, call, takeEvery, takeLatest, all} from 'redux-saga/effects';
import * as actionTypes from '../../../utils/Constants';
import {getToken, storeToken} from '../../../utils/SessionManager';
import API from '../../QueryApi';
import * as actionCreators from './Actions';

export function* logInWithCredentials(action) {
  try {
    const user = yield call(API.post, '/user/signin/', action.payload);
    yield AsyncStorage.setItem('user', JSON.stringify(user));
    yield put(actionCreators.checkTokenSuccess(JSON.stringify(user)));
    yield put(actionCreators.logInSuccess(user));
  } catch (error) {
    yield put(actionCreators.logInFailure(error));
  }
}

export function* registerWithCredentials(action) {
  try {
    const user = yield call(API.post, '/user/signup/', action.payload);
    yield put(actionCreators.registerSuccess(user));
    yield AsyncStorage.setItem('user', JSON.stringify(user));
    yield put(actionCreators.checkTokenSuccess(JSON.stringify(user)));
  } catch (error) {
    yield put(actionCreators.registerFailure(error));
  }
}

export function* tokenStore(data) {
  yield call(AsyncStorage.setItem('user', data));
}

export function* logInAfterRegister(action) {
  yield registerWithCredentials(action.payload);
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

export function* onTokenCheck() {
  try {
    const token = yield AsyncStorage.getItem('user');
    yield put(actionCreators.checkTokenSuccess(token));
  } catch (error) {
    console.log(error);
  }
}

export function* onTokenDestroyed() {
  try {
    yield AsyncStorage.removeItem('user');
    yield put(actionCreators.logOutSucess());
  } catch (error) {
    console.log(error);
  }
}

export function* authSaga() {
  yield takeEvery(actionTypes.SIGNUP_RESONSE, registerWithCredentials);
}

export function* authSagaLogin() {
  yield takeEvery(actionTypes.SIGNIN_RESONSE, logInWithCredentials);
}

export function* destroySession() {
  yield takeLatest(actionTypes.LOG_OUT, onTokenDestroyed);
}

export function* checkUserToken() {
  yield takeLatest(actionTypes.CHECK_TOKEN_START, onTokenCheck);
}
