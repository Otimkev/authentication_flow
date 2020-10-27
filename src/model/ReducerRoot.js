import {combineReducers} from 'redux';
import {PatientReducer} from './patient/Reducer';
import {AddPatientReducer} from './patient/addPatient/Reducer';
import {APatientReducer} from './patient/getAPatient/Reducer';
import {addTestReducer} from './test/addTest/Reducer';
import {getTestReducer} from './test/loadTests/Reducer';
import {InvitesReducer} from './patient/notifications/invites/Reducer';
import {getUsersReducer} from './user/Reducer';

export const RootReducer = combineReducers({
  mPatients: PatientReducer,
  addPatient: AddPatientReducer,
  aPatient: APatientReducer,
  addTest: addTestReducer,
  getTests: getTestReducer,
  invites: InvitesReducer,
  getUsers: getUsersReducer,
});
