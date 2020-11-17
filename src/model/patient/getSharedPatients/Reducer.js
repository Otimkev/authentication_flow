import * as actions from './Actions';
import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: false,
  isError: null,
  sharedList: [],
};

export const sharedPatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_SHARED_PATIENTS_RESONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_SHARED_PATIENTS_SUCESS:
      return {
        ...state,
        sharedList: action.payload,
        isFetching: false,
      };
    case actionType.GET_SHARED_PATIENTS_FAILURE:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
