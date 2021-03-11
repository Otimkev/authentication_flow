import createReducer from '../reducer_util';
import * as types from './action_types';

const initialState = {
  isLoading: false,
  specialist_list: [],
  error: null,
};

export const index_speciailsts_reducer = createReducer(initialState, {
  [types.GET_SPECIALISTS](state) {
    return {
      ...state,
      isLoading: true,
    };
  },
  [types.GET_SPECIALISTS_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      specialist_list: action.payload,
    };
  },
  [types.GET_SPECIALISTS_FAILURE](state, action) {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  },
});
