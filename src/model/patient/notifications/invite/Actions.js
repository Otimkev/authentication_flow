import * as actionType from '../../../../utils/Constants';

export const innvitesResponse = (patient) => {
  return {
    type: actionType.INVITE_RESPONSE,
    payload: {
      patient,
    },
  };
};

export const inviteSuccess = (invites) => {
  return {
    type: actionType.INVITE_SUCCESS,
    payload: {
      invites,
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
