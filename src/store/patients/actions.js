import * as types from './action_types';

export const index_patients = () => ({
  type: types.GET_PATIENTS,
});

export const index_patients_success = (specilists) => ({
  type: types.GET_PATIENTS_SUCCESS,
  payload: specilists,
});

export const index_patients_failure = (err) => ({
  type: types.GET_PATIENTS_FAILURE,
  error: err,
});
