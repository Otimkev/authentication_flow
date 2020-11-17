import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: false,
  isError: null,
  testCategoryList: [],
};

export const getTestCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CATEGORY_RESONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_CATEGORY_SUCESS:
      return {
        ...state,
        testCategoryList: action.payload,
        isFetching: false,
      };
    case actionType.GET_CATEGORY_FAILURE:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
