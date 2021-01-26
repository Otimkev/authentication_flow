import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';

function* addPatient(action) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const response = yield call(
      API.post,
      `/api/add-patient/${data.id}/`,
      action.payload,
    );
    console.log(response);
    yield put(actions.addPatientsSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.addPatientsFailure(e));
  }
}

function* addPatientSaga() {
  yield takeEvery(actionTypes.ADD_PATIENT_RESPONSE, addPatient);
}

export {addPatientSaga};
