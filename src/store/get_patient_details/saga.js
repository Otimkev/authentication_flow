import {put, takeEvery, all, call} from 'redux-saga/effects';
import * as types from './action_types';
import * as actions from './actions';

import * as api from '../../services/patients_service/patient_api_service';

function* get_a_patients_details_Saga(action) {
  try {
    const response = yield call(api.get_a_patient, {...action.payload});
    yield put(actions.get_patients_details_success(response));
  } catch (error) {
    yield put(actions.get_patients_details_failure(error));
  }
}

function* watch_get_a_patients_details_Saga() {
  yield takeEvery(types.GET_A_PATIENT, get_a_patients_details_Saga);
}

export default watch_get_a_patients_details_Saga;
