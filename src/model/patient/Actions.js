import * as actionType from '../../utils/Constants';

export const getAllPatientsResponse = () => {
  return {
    type: actionType.GET_ALL_PATIENTS_RESPONSE,
  };
};

export const getAllPatientsSuccess = (patients) => {
  return {
    type: actionType.GET_ALL_PATIENTS_SUCCESS,
    payload: {
      patients,
    },
  };
};

export const getAllPatientsFailure = (error) => {
  return {
    type: actionType.GET_ALL_PATIENTS_FAILURE,
    payload: {
      error,
    },
  };
};
