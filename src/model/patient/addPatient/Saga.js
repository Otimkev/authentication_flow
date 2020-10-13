import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* addPatient(action) {
  try {
    const response = yield call(API.post, '/add-patient/1/', action.payload);
    console.log(`============================${response}`);
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
