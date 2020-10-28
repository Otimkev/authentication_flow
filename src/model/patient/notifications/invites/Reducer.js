import * as actionType from '../../../../utils/Constants';

const initialState = {
  isFetching: null,
  isError: null,
  invites: [],
};

export const InvitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NOTIFICATIONS_RESPONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        invites: action.payload.invites,
        isFetching: false,
      };
    case actionType.GET_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};
