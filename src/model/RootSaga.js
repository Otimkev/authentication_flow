import {all, fork} from 'redux-saga/effects';
import {fetchAllPatientsSaga} from './patient/Saga';
import {addPatientSaga} from './patient/addPatient/Saga';
import {fetchAPatientsSaga} from './patient/getAPatient/Saga';
import {addTestSaga} from './test/addTest/Saga';
import {getTestsSaga} from './test/loadTests/Saga';

function* RootSaga() {
  yield all([
    fork(fetchAllPatientsSaga),
    fork(addPatientSaga),
    fork(fetchAPatientsSaga),
    fork(addTestSaga),
    fork(getTestsSaga),
  ]);
}

export {RootSaga};
