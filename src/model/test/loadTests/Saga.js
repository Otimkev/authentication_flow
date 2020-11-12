import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';

function* getTests(action) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const response = yield call(API.get, `/patient-tests/${data.result.id}/`);
    yield put(actions.getTestSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.getTestFailure(e));
  }
}

function* getTestsSaga() {
  yield takeEvery(actionTypes.GET_TEST_RESPONSE, getTests);
}

export {getTestsSaga};
