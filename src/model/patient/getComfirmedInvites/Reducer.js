import * as actionTypes from '../../../utils/Constants';

const initialState = {
  isLoading: false,
  responseData: [],
  Error: null,
};

export const getComfiredPatientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMFIRMED_INVITES_RESPONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_COMFIRMED_INVITES_SUCESS:
      return {
        ...state,
        isLoading: false,
        responseData: action.payload,
      };
    case actionTypes.GET_COMFIRMED_INVITES_FAILURE:
      return {
        ...state,
        Error: action.error,
      };
    default:
      return state;
  }
};
