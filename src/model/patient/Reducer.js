import * as actions from './Actions';
import * as actionType from '../../utils/Constants';

const initialState = {
  isFetching: null,
  isError: null,
  patients: [],
};

export const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_PATIENTS_RESPONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_ALL_PATIENTS_SUCCESS:
      return {
        ...state,
        patients: action.payload.patients,
      };
    case actionType.GET_ALL_PATIENTS_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};
