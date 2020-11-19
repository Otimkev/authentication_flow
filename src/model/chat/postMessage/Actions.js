import * as type from '../../../utils/Constants';

export const sendMessage = (conversationId, message) => ({
  type: type.SEND_MESSAGE,
  conversationId,
  message,
});
