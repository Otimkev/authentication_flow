import * as actionType from '../../../utils/Constants';

export const getUsersResponse = () => {
  return {
    type: actionType.GET_USER_RESPONSE,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: actionType.GET_USER_SUCCESS,
    payload: {
      users,
    },
  };
};

export const getUsersFailure = (error) => {
  return {
    type: actionType.GET_USER_FAILURE,
    payload: {
      error,
    },
  };
};
