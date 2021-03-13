import * as types from './action_types';

export const register_patient = (patient_data) => ({
  type: types.REGISTER_A_PATIENT,
  payload: patient_data,
});

export const register_patient_success = (data) => ({
  type: types.REGISTER_A_PATIENT_SUCCESS,
  payload: data,
});

export const register_patient_failure = (err) => ({
  type: types.REGISTER_A_PATIENT_FAILURE,
  error: err,
});
