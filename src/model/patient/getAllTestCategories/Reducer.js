import * as types from '../../../utils/Constants';

const initialState = {
  testCategories: [],
  error: null,
};

export const testCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_TEST_CATEGORIES_SUCESS:
      return {
        ...state,
        testCategories: action.payload,
      };
    case types.GET_ALL_TEST_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
