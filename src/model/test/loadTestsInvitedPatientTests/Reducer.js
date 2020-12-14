import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: false,
  isError: null,
  patientTestData: [],
};

export const getInvitedPatientTestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_INVITED_PATIENT_TESTS_RESPONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_INVITED_PATIENT_TESTS_SUCESS:
      return {
        ...state,
        patientTestData: action.payload,
        isFetching: false,
      };
    case actionType.GET_INVITED_PATIENT_TESTS_FAILURE:
      return {
        ...state,
        isError: action.error,
      };
    default:
      return state;
  }
};
