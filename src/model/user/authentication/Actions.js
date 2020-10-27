import * as actionType from '../../../../utils/Constants';

export const invitesResponse = (payload) => {
  return {
    type: actionType.INVITE_RESPONSE,
    payload,
  };
};

export const inviteSuccess = (data) => {
  return {
    type: actionType.INVITE_SUCCESS,
    payload: {
      data,
    },
  };
};

export const inviteFailure = (error) => {
  return {
    type: actionType.INVITE_FAILURE,
    payload: {
      error,
    },
  };
};
