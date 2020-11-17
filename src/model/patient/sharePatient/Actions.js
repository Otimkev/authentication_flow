import * as actionType from '../../../utils/Constants';

export const sharePatientsResponse = (payload) => {
  return {
    type: actionType.SHARE_PATIENT_RESONSE,
    payload,
  };
};

export const sharePatientsSuccess = (payload) => {
  return {
    type: actionType.SHARE_PATIENT_SUCESS,
    payload,
  };
};

export const sharePatientsFailure = (error) => {
  return {
    type: actionType.SHARE_PATIENT_FAILURE,
    error,
  };
};
