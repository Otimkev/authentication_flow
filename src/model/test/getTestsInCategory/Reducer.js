import * as actionType from '../../../utils/Constants';

const initialState = {
  isLoading: false,
  error: null,
  categoryTests: [],
};

export const getTestsInCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_TESTS_IN_CATEGORY_RESONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_TESTS_IN_CATEGORY_SUCESS:
      return {
        ...state,
        categoryTests: action.payload,
        isLoading: false,
      };
    case actionType.GET_TESTS_IN_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
