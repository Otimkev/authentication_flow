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
import {sharePatientReducer} from './patient/sharePatient/Reducer';
import {sharedPatientReducer} from './patient/getSharedPatients/Reducer';
import {createChatRoomReducer} from './chat/createChatRoom/Reducer';
import {loadChatRoomsReducer} from './chat/loadChatRooms/Reducer';
import {messagesReducer} from './chat/loadMessages/Reducer';
import {chatUsersReducer} from './chat/users/Reducer';
import {testCategoriesReducer} from './patient/getAllTestCategories/Reducer';
import {getCategoryTestsReducer} from './test/getCategoryTests/Reducer';
import {getInvitedPatientTestsReducer} from './test/loadTestsInvitedPatientTests/Reducer';
import {getComfiredPatientsReducer} from './patient/getComfirmedInvites/Reducer';

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
  sharePatient: sharePatientReducer,
  sharedPatients: sharedPatientReducer,
  createChatRoom: createChatRoomReducer,
  getChatRooms: loadChatRoomsReducer,
  messages: messagesReducer,
  chatUsers: chatUsersReducer,
  getAllTestCategories: testCategoriesReducer,
  getCategoryTests: getCategoryTestsReducer,
  getInvitedPatientsTests: getInvitedPatientTestsReducer,
  getComfiredPatientInvites: getComfiredPatientsReducer,
});
