import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';

function* sharePatient(action) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const {receiverId, patientId} = action.payload;
    const response = yield call(
      API.post,
      `/api/share/${data.id}/${receiverId}/${patientId}`,
      action.payload,
    );
    yield put(actions.sharePatientsSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.sharePatientsFailure(e));
  }
}

function* sharePatientSaga() {
  yield takeEvery(actionTypes.SHARE_PATIENT_RESONSE, sharePatient);
}

export {sharePatientSaga};
