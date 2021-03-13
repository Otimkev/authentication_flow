import {all, fork} from 'redux-saga/effects';
import watch_index_specialists_Saga from './home/saga';
import watch_index_patients_Saga from './patients/saga';
import watch_auth_saga from './sagas';
import watch_get_a_patients_details_Saga from './get_patient_details/saga';
import watch_register_patient_Saga from './register_patient/saga';

export default function* rootSaga() {
  yield all([
    fork(watch_index_specialists_Saga),
    fork(watch_auth_saga),
    fork(watch_index_patients_Saga),
    fork(watch_get_a_patients_details_Saga),
    fork(watch_register_patient_Saga),
  ]);
}
