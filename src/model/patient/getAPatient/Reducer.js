import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: null,
  isError: null,
  aPatient: [],
};

export const APatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_A_PATIENT_RESPONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_A_PATIENT_SUCCESS:
      return {
        ...state,
        aPatient: action.payload.data,
      };
    case actionType.GET_A_PATIENT_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};
