import * as actionTypes from '../../../utils/Constants';

const initialState = {
  isAddPatientLoading: false,
  responseData: [],
  isAddPatientError: null,
};

export const AddPatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PATIENT_RESPONSE:
      return {
        ...state,
        isAddPatientLoading: true,
      };
    case actionTypes.ADD_PATIENTS_SUCCESS:
      return {
        ...state,
        isAddPatientLoading: false,
        responseData: action.payload.data,
      };
    case actionTypes.ADD_PATIENTS_FAILURE:
      return {
        ...state,
        isAddPatientError: action.payload.error,
      };
    default:
      return state;
  }
};
