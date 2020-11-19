import * as types from '../../../utils/Constants';

const initialState = {
  currenConversationId: null,
  conversations: [],
  error: null,
};

export const sendMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE: {
      if (state[action.conversationId]) {
        return {
          ...state,
          [action.conversationId]: [
            ...state[action.conversationId],
            action.message,
          ],
        };
      }
      return {
        ...state,
        [action.conversationId]: [action.message],
      };
    }
    default:
      return state;
  }
};
