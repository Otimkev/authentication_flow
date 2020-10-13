import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../utils/Constants';
import API from '../QueryApi';

function* fetchAllPatients() {
  try {
    const vPatients = yield call(API.get, '/all-patient/1/');
    yield put(actions.getAllPatientsSuccess(vPatients));
  } catch (e) {
    console.log(e);
    yield put(actions.getAllPatientsFailure(e));
  }
}

function* fetchAllPatientsSaga() {
  yield takeEvery(actionTypes.GET_ALL_PATIENTS_RESPONSE, fetchAllPatients);
}

export {fetchAllPatientsSaga};
