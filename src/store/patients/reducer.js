import createReducer from '../reducer_util';
import * as types from './action_types';

const initialState = {
  isLoading: false,
  patients_list: [],
  error: null,
};

export const index_patients_reducer = createReducer(initialState, {
  [types.GET_PATIENTS](state) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [types.GET_PATIENTS_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      patients_list: action.payload,
    };
  },
  [types.GET_PATIENTS_FAILURE](state, action) {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  },
});
