import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: null,
  isError: null,
  patientTestData: [],
};

export const getTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_TEST_RESPONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_TEST_SUCCESS:
      return {
        ...state,
        patientTestData: action.payload.data,
        isFetching: false,
      };
    case actionType.GET_TEST_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};
