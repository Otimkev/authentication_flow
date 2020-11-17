import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: false,
  Error: null,
  inviteList: [],
};

export const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_USER_RESPONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_USER_SUCCESS:
      return {
        ...state,
        inviteList: action.payload.users,
        isFetching: false,
      };
    case actionType.GET_USER_FAILURE:
      return {
        ...state,
        Error: action.payload.error,
      };
    default:
      return state;
  }
};
