import * as types from './action_types';

export const index_specialists = () => ({
  type: types.GET_SPECIALISTS,
});

export const index_speciaists_success = (specilists) => ({
  type: types.GET_SPECIALISTS_SUCCESS,
  payload: specilists,
});

export const index_speciaists_failure = (err) => ({
  type: types.GET_SPECIALISTS_FAILURE,
  error: err,
});
