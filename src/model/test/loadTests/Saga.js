import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {API_URL} from '../../../utils/config/Urls';

function* getTests(action) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);

    const response = yield call(mF, action, data);
    console.log(response.data);
    yield put(actions.getTestSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.getTestFailure(e));
  }
}

const mF = async (action, data) => {
  return await axios.get(`${API_URL}patient/tests/${data.result.id}`, {
    params: action.payload,
  });
};

function* getTestsSaga() {
  yield takeLatest(actionTypes.GET_TEST_RESPONSE, getTests);
}

export {getTestsSaga};
