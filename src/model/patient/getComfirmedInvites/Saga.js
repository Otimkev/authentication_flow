import {put, call, takeEvery} from 'redux-saga/effects';
import * as actions from './Actions';
import * as actionTypes from '../../../utils/Constants';
import API from '../../QueryApi';
import AsyncStorage from '@react-native-community/async-storage';

function* getComfiredPatientInvites() {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const response = yield call(
      API.get,
      `/user/accept-invite/${data.id}/`,
    );
    yield put(actions.getComfiredPatientsSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(actions.getComfiredPatientsFailure(e));
  }
}

function* getComfiredPatientInvitesSaga() {
  yield takeEvery(
    actionTypes.GET_COMFIRMED_INVITES_RESPONSE,
    getComfiredPatientInvites,
  );
}

export {getComfiredPatientInvitesSaga};
