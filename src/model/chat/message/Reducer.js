import * as types from '../../../utils/Constants';
const initialState = {
  isLoading: false,
  historymessages: [],
  error: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.GOT_MESSAGES_RESPONSE:
    //   return {...state, isLoading: true};
    case types.GOT_MESSAGES:
      return {...state, historymessages: action.messages, isLoading: false};
    case types.GOT_NEW_MESSAGE:
      return {...state, historymessages: action.messages};
    default:
      return state;
  }
};
