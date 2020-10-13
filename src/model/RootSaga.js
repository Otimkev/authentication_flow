import {all, fork} from 'redux-saga/effects';
import {fetchAllPatientsSaga} from './patient/Saga';
import {addPatientSaga} from './patient/addPatient/Saga';

function* RootSaga() {
  yield all([fork(fetchAllPatientsSaga), fork(addPatientSaga)]);
}

export {RootSaga};
