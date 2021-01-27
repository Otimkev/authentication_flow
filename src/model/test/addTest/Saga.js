import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';
function* addTest(action) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const response = yield call(
      API.post,
      `/api/patient/${action.payload.id}/add-test/`,
      {...action.payload.data, userId: data.id},
    );
    yield put(actions.addTestSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.addTestFailure(e));
  }
}

function* addTestSaga() {
  yield takeEvery(actionTypes.ADD_TEST_RESPONSE, addTest);
}

export {addTestSaga};
