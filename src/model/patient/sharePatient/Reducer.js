import * as actionTypes from '../../../utils/Constants';

const initialState = {
  isLoading: false,
  responseData: [],
  Error: null,
};

export const sharePatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHARE_PATIENT_RESONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SHARE_PATIENT_SUCESS:
      return {
        ...state,
        isLoading: false,
        responseData: action.payload,
      };
    case actionTypes.SHARE_PATIENT_FAILURE:
      return {
        ...state,
        Error: action.error,
      };
    default:
      return state;
  }
};
