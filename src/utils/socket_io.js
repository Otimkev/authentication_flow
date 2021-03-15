import socket from './socket_config';

export const identify = (user_credentials) => {
  socket.emit('identity', user_credentials);
};

export const send_message = (message) => {
  socket.emit('message', message);
};

export const receive_message = () => {
  socket.on('incomingMessage', (response) => {
    return response;
  });
};

export const prompt_message_history = (chat_room_id) => {
  socket.emit('chat', chat_room_id);
};

export const history = socket.on('priorMessages', (message_historys) => {
  return message_historys;
});
