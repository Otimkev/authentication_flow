import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {API_URL} from '../../../utils/config/Urls';

function* getInvitedPatientTests(action) {
  try {
    const response = yield call(mF, action);
    console.log(response.data);
    yield put(actions.getInvitedPatientTestsSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.getInvitedPatientTestsFailure(e));
  }
}

const mF = async (action) => {
  return await axios.get(`${API_URL}patient/tests/${action.senderId}`, {
    params: action.payload,
  });
};

function* getInvitedPatientTestSaga() {
  yield takeLatest(
    actionTypes.GET_INVITED_PATIENT_TESTS_RESPONSE,
    getInvitedPatientTests,
  );
}

export {getInvitedPatientTestSaga};
