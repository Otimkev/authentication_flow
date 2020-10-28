import {all, fork} from 'redux-saga/effects';
import {fetchAllPatientsSaga} from './patient/Saga';
import {addPatientSaga} from './patient/addPatient/Saga';
import {fetchAPatientsSaga} from './patient/getAPatient/Saga';
import {addTestSaga} from './test/addTest/Saga';
import {getTestsSaga} from './test/loadTests/Saga';
import {fetchAllInvitesSaga} from './patient/notifications/invites/Saga';
import {fetchAllUsersSaga} from './user/Saga';
import {InviteSaga} from './patient/notifications/invite/Saga';
import {signupSaga} from './user/authentication/Saga';

function* RootSaga() {
  yield all([
    fork(fetchAllInvitesSaga),
    fork(fetchAllPatientsSaga),
    fork(addPatientSaga),
    fork(fetchAPatientsSaga),
    fork(addTestSaga),
    fork(getTestsSaga),
    fork(fetchAllUsersSaga),
    fork(InviteSaga),
    fork(signupSaga),
  ]);
}

export {RootSaga};
