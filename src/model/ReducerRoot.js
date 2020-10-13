import {combineReducers} from 'redux';
import {PatientReducer} from './patient/Reducer';
import {AddPatientReducer} from './patient/addPatient/Reducer';

export const RootReducer = combineReducers({
  patients: PatientReducer,
  addPatient: AddPatientReducer,
});
