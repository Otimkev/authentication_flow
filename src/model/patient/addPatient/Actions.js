import * as actionType from '../../../utils/Constants';

export const addPatientsResponse = (payload) => {
  return {
    type: actionType.ADD_PATIENT_RESPONSE,
    payload,
  };
};

export const addPatientsSuccess = (data) => {
  return {
    type: actionType.ADD_PATIENTS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addPatientsFailure = (error) => {
  return {
    type: actionType.ADD_PATIENTS_FAILURE,
    payload: {
      error,
    },
  };
};
