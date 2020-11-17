import * as actionCreators from './Actions';
import * as types from './Types';
import API from '../../QueryApi';
import {takeLatest, put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

function* register(action) {
  try {
    const response = yield call(API.post, '/user/signup/', action.payload);
    let token = response.token;
    if (token) {
      console.log('success: ', token);
      //yield call(AsyncStorage.setItem, 'user', token);
      yield put(actionCreators.register(token));
    }
  } catch (e) {
    yield put(actionCreators.failure(e));
    console.log('error', e);
  }
}

function* registerSaga() {
  yield takeLatest(types.RESPONSE, register);
}

export {registerSaga};
