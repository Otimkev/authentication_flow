import * as actionType from '../../../utils/Constants';

export const getTestResponse = (id) => {
  return {
    type: actionType.GET_TEST_RESPONSE,
    payload: {
      id,
    },
  };
};

export const getTestSuccess = (data) => {
  return {
    type: actionType.GET_TEST_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getTestFailure = (error) => {
  return {
    type: actionType.GET_TEST_FAILURE,
    payload: {
      error,
    },
  };
};
