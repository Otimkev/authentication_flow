import {put, takeEvery, all, call} from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';

import * as api from '../../services/api';
import * as storage from '../../services/persistentStorage';

function* loginSaga(action) {
  try {
    const user = yield call(api.login, {...action.payload});
    //storage.removeAllData();
    if (user['success'] === false) {
      yield put(actions.loginFailure('Wrong Credentials!'));
      return;
    }
    yield call(storage.storeData, 'user', JSON.stringify(user));
    yield put(actions.loginSuccess(user));
  } catch (error) {
    yield put(actions.logniFailure(error));
  }
}

function* logoutSaga() {
  try {
    yield call(storage.removeData, 'user');
    yield put(actions.logoutSuccess());
  } catch (error) {
    yield put(actions.logoutFailure(error));
  }
}

function* signUpSaga(action) {
  try {
    const user = yield call(api.signUp, {...action.payload});
    console.log('USER', user);
    if (user['success'] === false) {
      yield put(actions.signUpFailure('Email already exists!'));
      return;
    }
    yield call(storage.storeData, 'user', JSON.stringify(user));
    yield put(actions.signUpSuccess(user));
  } catch (error) {
    yield put(actions.signUpFailure(error));
  }
}

function* watch_auth_saga() {
  yield takeEvery(types.LOG_IN, loginSaga);
  yield takeEvery(types.LOG_OUT, logoutSaga);
  yield takeEvery(types.SIGN_UP, signUpSaga);
}

export default watch_auth_saga;
