import * as types from '../../../utils/Constants';
const initialState = {
  historymessages: [],
  isLoading: false,
  error: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GOT_MESSAGES_RESPONSE:
      return {...state, isLoading: true};
    case types.GOT_MESSAGES_SUCCESS:
      return {...state, historymessages: action.payload, isLoading: false};
    case types.GOT_NEW_MESSAGE:
      return {...state};
    case types.GOT_MESSAGE_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};
