import socket from './socket_config';

export const identify = (user_credentials) => {
  socket.emit('identity', user_credentials);
};

export const send_message = (message) => {
  socket.emit('message', message);
};

export const receive_message = () => {
  socket.on('new_message', (response) => {
    return response;
  });
};

export const prompt_message_history = (chat_room_id) => {
  socket.emit('request_room_messages', chat_room_id);
  _get_message_history();
};

export const _get_message_history = () => {
  socket.on('chat_room_messages', (message_history) => {
    return message_history;
  });
};
