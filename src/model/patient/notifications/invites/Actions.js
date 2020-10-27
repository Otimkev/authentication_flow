import * as actionType from '../../../../utils/Constants';

export const getInvitesResponse = () => {
  return {
    type: actionType.GET_NOTIFICATIONS_RESPONSE,
  };
};

export const getInvitesSuccess = (invites) => {
  return {
    type: actionType.GET_NOTIFICATIONS_SUCCESS,
    payload: {
      invites,
    },
  };
};

export const getInvitesFailure = (error) => {
  return {
    type: actionType.GET_NOTIFICATIONS_FAILURE,
    payload: {
      error,
    },
  };
};
