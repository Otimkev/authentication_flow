import * as actionType from '../../../utils/Constants';

export const getTestCategoryResponse = (id) => {
  return {
    type: actionType.GET_CATEGORY_RESONSE,
    payload: id,
  };
};

export const getTestCategorySuccess = (data) => {
  return {
    type: actionType.GET_CATEGORY_SUCESS,
    payload: data,
  };
};

export const getTestCategoryFailure = (error) => {
  return {
    type: actionType.GET_CATEGORY_FAILURE,
    payload: error,
  };
};
