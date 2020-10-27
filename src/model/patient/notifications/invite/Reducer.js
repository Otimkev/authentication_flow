import * as actionType from '../../../../utils/Constants';

const initialState = {
  isInviting: false,
  Error: null,
  invite: [],
};

export const performInviteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INVITE_RESPONSE:
      return {
        ...state,
        isInviting: true,
      };
    case actionType.INVITE_SUCCESS:
      return {
        ...state,
        invite: action.payload.invite,
        isInviting: false,
      };
    case actionType.INVITE_FAILURE:
      return {
        ...state,
        Error: action.payload.error,
      };
    default:
      return state;
  }
};
