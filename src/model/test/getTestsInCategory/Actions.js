import * as types from '../../../utils/Constants';

export const getTestInCategoriesResponse = (payload) => {
  return {
    type: types.GET_TESTS_IN_CATEGORY_RESONSE,
    payload: payload,
  };
};

export const getTestInCategoriesSuccess = (data) => {
  return {
    type: types.GET_TESTS_IN_CATEGORY_SUCESS,
    payload: data,
  };
};

export const getTestInCategoriesFailure = (error) => {
  return {
    type: types.GET_TESTS_IN_CATEGORY_FAILURE,
    payload: error,
  };
};
