import * as actionType from '../../../utils/Constants';

export const signupResponse = (payload) => {
  return {
    type: actionType.SIGNUP_RESONSE,
    payload,
  };
};

export const signupSuccess = (data) => {
  return {
    type: actionType.SIGNUP_SUCCESS,
    payload: {
      data,
    },
  };
};

export const signupFailure = (error) => {
  return {
    type: actionType.SIGNUP_FAILURE,
    payload: {
      error,
    },
  };
};

export const signinResponse = (payload) => {
  return {
    type: actionType.SIGNIN_RESONSE,
    payload,
  };
};

export const signinSuccess = (data) => {
  return {
    type: actionType.SIGNIN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const signinFailure = (error) => {
  return {
    type: actionType.SIGNIN_FAILURE,
    payload: {
      error,
    },
  };
};
