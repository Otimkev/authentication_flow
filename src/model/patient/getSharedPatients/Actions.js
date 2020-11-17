import * as actionType from '../../../utils/Constants';

export const getSharedPatientsResponse = () => {
  return {
    type: actionType.GET_SHARED_PATIENTS_RESONSE,
  };
};

export const getSharedPatientsSuccess = (patients) => {
  return {
    type: actionType.GET_SHARED_PATIENTS_SUCESS,
    payload: patients,
  };
};

export const getSharedPatientsFailure = (error) => {
  return {
    type: actionType.GET_SHARED_PATIENTS_FAILURE,
    payload: error,
  };
};
