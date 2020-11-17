import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';

function* getAllSharedPatients() {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const response = yield call(API.get, `/user/shared/${data.result.id}/`);
    console.log(response);
    yield put(actions.getSharedPatientsSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.getSharedPatientsFailure(e));
  }
}

function* getSharedPatientsSaga() {
  yield takeEvery(
    actionTypes.GET_SHARED_PATIENTS_RESONSE,
    getAllSharedPatients,
  );
}

export {getSharedPatientsSaga};
