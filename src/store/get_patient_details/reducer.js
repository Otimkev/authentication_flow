import createReducer from '../reducer_util';
import * as types from './action_types';

const initialState = {
  isLoading: false,
  patient_details: [],
  error: null,
};

export const get_patients_details_reducer = createReducer(initialState, {
  [types.GET_A_PATIENT](state) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [types.GET_A_PATIENT_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      patient_details: action.payload,
    };
  },
  [types.GET_A_PATIENTS_FAILURE](state, action) {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  },
});
