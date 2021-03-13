import createReducer from '../reducer_util';
import * as types from './action_types';

const initialState = {
  isLoading: false,
  is_patient_registerd: "[]",
  error: 'null',
};

export const register_patient_reducer = createReducer(initialState, {
  [types.REGISTER_A_PATIENT](state, action) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [types.REGISTER_A_PATIENT_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      is_patient_registerd: action.payload,
    };
  },
  [types.REGISTER_A_PATIENT_FAILURE](state, action) {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  },
});
