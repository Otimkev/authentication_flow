import * as types from '../../../utils/Constants';

export const getAllTestCategory = (payload) => {
  return {
    type: types.GET_ALL_TEST_CATEGORIES_SUCESS,
    payload,
  };
};

export const getAllTestCategoryFailure = (error) => {
  return {
    type: types.GET_ALL_TEST_CATEGORIES_FAILURE,
    payload: error,
  };
};
