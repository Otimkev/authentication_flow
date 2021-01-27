import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {API_URL} from '../../../utils/config/Urls';
import API from '../../QueryApi';

function* getTests(action) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const {patientId, testId} = action.payload;
    const response = yield call(API.get, `/api/tests/${patientId}/${testId}/`);
    console.log(response);
    yield put(actions.getTestSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.getTestFailure(e));
  }
}

const mF = async (action, data) => {
  return await axios.get(`${API_URL}/api/tests/`, {
    params: action.payload,
  });
};

function* getTestsSaga() {
  yield takeLatest(actionTypes.GET_TEST_RESPONSE, getTests);
}

export {getTestsSaga};
