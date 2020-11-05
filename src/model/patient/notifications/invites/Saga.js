import AsyncStorage from '@react-native-community/async-storage';
import {put, call, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../../../../utils/Constants';
import API from '../../../QueryApi';
import * as actionCreators from './Actions';

function* fetchAllInvites(actions) {
  try {
    const userData = yield AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    const vPatients = yield call(
      API.get,
      `/getshare-patient/${data.result.id}/`,
    );
    console.log(vPatients);
    yield put(actionCreators.getInvitesSuccess(vPatients));
  } catch (e) {
    console.log(e);
    yield put(actionCreators.getInvitesFailure(e));
  }
}

function* fetchAllInvitesSaga() {
  yield takeEvery(actionTypes.GET_NOTIFICATIONS_RESPONSE, fetchAllInvites);
}

export {fetchAllInvitesSaga};
