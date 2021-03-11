import * as types from './action_types';

export const get_patients_details = (patient_id) => ({
  type: types.GET_A_PATIENT,
  payload: patient_id,
});

export const get_patients_details_success = (data) => ({
  type: types.GET_PATIENTS_A_SUCCESS,
  payload: data,
});

export const get_patients_details_failure = (err) => ({
  type: types.GET_PATIENTS_A_FAILURE,
  error: err,
});
