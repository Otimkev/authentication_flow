import {all, fork} from 'redux-saga/effects';
import {fetchAllPatientsSaga} from './patient/getAllPatients/Saga';
import {addPatientSaga} from './patient/addPatient/Saga';
import {fetchAPatientsSaga} from './patient/getAPatient/Saga';
import {addTestSaga} from './test/addTest/Saga';
import {getTestsSaga} from './test/loadTests/Saga';
import {fetchAllInvitesSaga} from './patient/notifications/invites/Saga';
import {fetchAllUsersSaga} from './user/getAllUsers/Saga';
import {InviteSaga} from './patient/notifications/invite/Saga';
import {
  authSaga,
  authSagaLogin,
  checkUserToken,
  destroySession,
} from './user/authentication/Saga';
import {registerSaga} from './user/signup/Saga';
import {getTestCategorySaga} from './test/loadTestCategories/Saga';
import {sharePatientSaga} from './patient/sharePatient/Saga';
import {getSharedPatientsSaga} from './patient/getSharedPatients/Saga';
import {createChatRoomSaga} from './chat/createChatRoom/Saga';
import {fetchChatRoomsSaga} from './chat/loadChatRooms/Saga';

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
    fork(authSaga),
    fork(checkUserToken),
    fork(destroySession),
    fork(authSagaLogin),
    //new saga
    fork(registerSaga),
    fork(getTestCategorySaga),
    fork(sharePatientSaga),
    fork(getSharedPatientsSaga),
    fork(createChatRoomSaga),
    fork(fetchChatRoomsSaga),
  ]);
}

export {RootSaga};
