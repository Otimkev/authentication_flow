import * as actionType from '../../../utils/Constants';

const initialState = {
  isLoading: false,
  error: null,
  categoryTests: [],
};

export const getCategoryTestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_CATEGORY_TEST_RESPONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_ALL_CATEGORY_TEST_SUCESS:
      return {
        ...state,
        categoryTests: action.payload,
        isLoading: false,
      };
    case actionType.GET_ALL_CATEGORY_TEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
