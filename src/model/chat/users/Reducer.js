import * as types from '../../../utils/Constants';

export const chatUsersReducer = (state = [], action) => {
  switch (action.type) {
    case types.GOT_USERS:
      return action.users;
    case types.GOT_NEW_USER:
      if (!state.find((user) => user.id === action.user.id)) {
        return [...state, action.user];
      } else {
        return state;
      }
    default:
      return state;
  }
};
