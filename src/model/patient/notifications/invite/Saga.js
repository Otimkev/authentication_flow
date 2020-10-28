import {put, call, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../../../../utils/Constants';
import API from '../../../QueryApi';
import * as actionCreators from './Actions';

function* invite(action) {
  try {
    const vInvite = yield call(
      API.post,
      `/share-patient/2/${action.payload.userId}/${action.payload.patientId}`,
    );
    console.log(action.payload);
    console.log(vInvite);
    yield put(actionCreators.inviteSuccess(vInvite));
  } catch (e) {
    console.log(e);
    yield put(actionCreators.inviteFailure(e));
  }
}

function* InviteSaga() {
  yield takeEvery(actionTypes.INVITE_RESPONSE, invite);
}

export {InviteSaga};
