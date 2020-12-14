import * as actionType from '../../../utils/Constants';

export const getInvitedPatientTestsResponse = (payload, senderId) => {
  return {
    type: actionType.GET_INVITED_PATIENT_TESTS_RESPONSE,
    payload,
    senderId,
  };
};

export const getInvitedPatientTestsSuccess = (payload) => {
  return {
    type: actionType.GET_INVITED_PATIENT_TESTS_SUCESS,
    payload,
  };
};

export const getInvitedPatientTestsFailure = (error) => {
  return {
    type: actionType.GET_INVITED_PATIENT_TESTS_FAILURE,
    error,
  };
};
