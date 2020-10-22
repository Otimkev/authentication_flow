import * as actionType from '../../../utils/Constants';

export const getAPatientsResponse = (payload) => {
  return {
    type: actionType.GET_A_PATIENT_RESPONSE,
    payload,
  };
};

export const getAPatientsSuccess = (data) => {
  return {
    type: actionType.GET_A_PATIENT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getAPatientsFailure = (error) => {
  return {
    type: actionType.GET_A_PATIENT_FAILURE,
    payload: {
      error,
    },
  };
};
