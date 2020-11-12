import {combineReducers} from 'redux';
import {PatientReducer} from './patient/getAllPatients/Reducer';
import {AddPatientReducer} from './patient/addPatient/Reducer';
import {APatientReducer} from './patient/getAPatient/Reducer';
import {addTestReducer} from './test/addTest/Reducer';
import {getTestReducer} from './test/loadTests/Reducer';
import {InvitesReducer} from './patient/notifications/invites/Reducer';
import {getUsersReducer} from './user/getAllUsers/Reducer';
import {InviteAUserReducer} from './patient/notifications/invite/Reducer';
import {AuthenticationReducer} from './user/authentication/AuthReducer';
import {registerReducer} from './user/signup/Reducer';
import {getTestCategoryReducer} from './test/loadTestCategories/Reducer';

export const RootReducer = combineReducers({
  mPatients: PatientReducer,
  addPatient: AddPatientReducer,
  aPatient: APatientReducer,
  addTest: addTestReducer,
  getTests: getTestReducer,
  invites: InvitesReducer,
  getUsers: getUsersReducer,
  invite: InviteAUserReducer,
  authentication: AuthenticationReducer,
  register: registerReducer,
  getTestCategory: getTestCategoryReducer,
});
