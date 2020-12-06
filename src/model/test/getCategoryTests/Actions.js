import * as types from '../../../utils/Constants';

export const getTestCategoriesResponse = (payload) => {
  return {
    type: types.GET_ALL_CATEGORY_TEST_RESPONSE,
    payload: payload,
  };
};

export const getTestCategoriesSuccess = (data) => {
  return {
    type: types.GET_ALL_CATEGORY_TEST_SUCESS,
    payload: data,
  };
};

export const getTestCategories = (data, mangoes) => {
  return {
    type: types.GET_ALL_CATEGORY_TEST_SUCESS,
    payload: {
      data,
      mangoes,
    },
  };
};

export const getTestCategoriesFailure = (error) => {
  return {
    type: types.GET_ALL_CATEGORY_TEST_FAILURE,
    payload: error,
  };
};
