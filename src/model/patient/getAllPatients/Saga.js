import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';
import {getToken} from '../../../utils/SessionManager';

function* fetchAllPatients() {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const vPatients = yield call(
      API.get,
      `/api/patients/${data.id}/${1}`,
    );
    console.log(vPatients);
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
