import * as types from '../../../utils/Constants';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GOT_MESSAGES:
      return action.messages ? action.messages : [];
    case types.GOT_NEW_MESSAGE:
      return [action.message, ...state];
    default:
      return state;
  }
};
