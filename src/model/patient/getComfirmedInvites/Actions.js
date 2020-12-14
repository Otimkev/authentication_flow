import * as actionType from '../../../utils/Constants';

export const getComfiredPatientsResponse = (payload) => {
  return {
    type: actionType.GET_COMFIRMED_INVITES_RESPONSE,
    payload,
  };
};

export const getComfiredPatientsSuccess = (payload) => {
  return {
    type: actionType.GET_COMFIRMED_INVITES_SUCESS,
    payload,
  };
};

export const getComfiredPatientsFailure = (error) => {
  return {
    type: actionType.GET_ALL_TEST_CATEGORIES_FAILURE,
    error,
  };
};
