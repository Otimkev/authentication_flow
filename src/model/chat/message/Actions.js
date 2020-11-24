import * as types from '../../../utils/Constants';

export const gotMessagesResponse = (payload) => ({
  type: 'GOT_MESSAGES_RESPONSE',
  payload,
});

export const gotMessages = (messages) => ({type: types.GOT_MESSAGES, messages});

export const gotNewMessage = (message) => ({
  type: types.GOT_NEW_MESSAGE,
  message,
});
