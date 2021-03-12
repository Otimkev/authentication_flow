import {combineReducers} from 'redux';
import auth from './auth';
import {index_speciailsts_reducer} from './home/reducer';
import {index_patients_reducer} from './patients/reducer';
import {get_patients_details_reducer} from './get_patient_details/reducer';
import {register_patient_reducer} from './register_patient/reducer';

export default combineReducers({
  auth,
  index_speciailsts_reducer,
  index_patients_reducer,
  get_patients_details_reducer,
  register_patient_reducer,
});
