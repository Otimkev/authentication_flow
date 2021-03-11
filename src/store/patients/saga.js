import {put, takeEvery, all, call} from 'redux-saga/effects';
import * as types from './action_types';
import * as actions from './actions';

import * as api from '../../services/patients_service/patient_api_service';

function* index_patients_Saga(action) {
  try {
    const response = yield call(api.index_patients);
    yield put(actions.index_patients_success(response));
  } catch (error) {
    yield put(actions.index_patients_failure(error));
  }
}

function* watch_index_patients_Saga() {
  yield takeEvery(types.GET_PATIENTS, index_patients_Saga);
}

export default watch_index_patients_Saga;
