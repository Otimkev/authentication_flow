import * as actionType from '../../../utils/Constants';

export const addTestResponse = (id, data) => {
  return {
    type: actionType.ADD_TEST_RESPONSE,
    payload: {
      data,
      id,
    },
  };
};

export const addTestSuccess = (data) => {
  return {
    type: actionType.ADD_TEST_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTestFailure = (error) => {
  return {
    type: actionType.ADD_TEST_FAILURE,
    payload: {
      error,
    },
  };
};
