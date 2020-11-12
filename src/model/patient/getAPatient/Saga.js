import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';

function* fetchAPatients(action) {
  try {
    const aPatientResponse = yield call(
      API.get,
      `/user/get-patient/${action.payload}`,
    );
    yield put(actions.getAPatientsSuccess(aPatientResponse));
  } catch (e) {
    console.log(e);
    yield put(actions.getAPatientsFailure(e));
  }
}

function* fetchAPatientsSaga() {
  yield takeEvery(actionTypes.GET_A_PATIENT_RESPONSE, fetchAPatients);
}

export {fetchAPatientsSaga};
