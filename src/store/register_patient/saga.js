import {put, takeEvery, all, call} from 'redux-saga/effects';
import * as types from './action_types';
import * as actions from './actions';

import * as api from '../../services/patients_service/patient_api_service';

function* register_patient_Saga(action) {
  const patient_id = action.payload;
  try {
    const response = yield call(api.register_patient, {patient_id});
    yield put(actions.register_patient_success(response));
  } catch (error) {
    yield put(actions.register_patient_failure(error));
  }
}

function* watch_register_patient_Saga() {
  yield takeEvery(types.REGISTER_A_PATIENT, register_patient_Saga);
}

export default watch_register_patient_Saga;
