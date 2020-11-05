import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: null,
  isError: null,
  addTestData: null,
};

export const addTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TEST_RESPONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.ADD_TEST_SUCCESS:
      return {
        ...state,
        addTestData: action.payload.data,
      };
    case actionType.ADD_TEST_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};
