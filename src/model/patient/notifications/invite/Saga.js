import {put, call, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../../../../utils/Constants';
import API from '../../../QueryApi';
import * as actionCreators from './Actions';

function* fetchAllInvites(actions) {
  try {
    const vPatients = yield call(API.post, '/share-patient/2/:targetId/:patientId/');
    console.log(vPatients);
    yield put(actionCreators.getInvitesSuccess(vPatients));
  } catch (e) {
    console.log(e);
    yield put(actionCreators.getInvitesFailure(e));
  }
}

function* fetchAllInvitesSaga() {
  yield takeEvery(actionTypes.INVITE_RESPONSE, fetchAllInvites);
}

export {fetchAllInvitesSaga};
