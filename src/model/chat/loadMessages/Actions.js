import * as types from '../../../utils/Constants';

export const gotMessagesResponse = (payload) => ({
  type: types.GOT_MESSAGES_RESPONSE,
  payload,
});

export const gotMessagesSuccess = (payload) => ({
  type: types.GOT_MESSAGES_SUCCESS,
  payload,
});

export const gotMessagesFailure = (error) => ({
  type: types.GOT_MESSAGE_FAILURE,
  error,
});

export const gotNewMessage = (message) => ({
  type: types.GOT_NEW_MESSAGE,
  message,
});
