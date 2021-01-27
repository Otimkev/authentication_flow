import {Store} from '../store/Store';
import socket from './SocketIo';
import * as messageactionCreator from '../model/chat/loadMessages/Actions';
import * as userActionCreator from '../model/chat/users/Actions';

socket.on('priorMessages', async (messages) => {
  await Store.dispatch(messageactionCreator.gotMessages(messages));
});
socket.on('userCreated', (response) => {
  const {user, users} = response;
  Store.dispatch(userActionCreator.gotUser(user));
  Store.dispatch(userActionCreator.gotUsers(users));
  //navigate('Users');
});
socket.on('identity', (user) => {
  Store.dispatch(userActionCreator.gotNewUser(user));
});
socket.on('incomingMessage', (message) => {
  Store.dispatch(messageactionCreator.gotNewMessage(message));
});

export const login = (credentials) => {
  socket.emit('identity', credentials);
};
export const openChat = (users) => {
  socket.emit('chat', users);
};
export const sendMessage = (senderId, receiverId, text) => {
  socket.emit('message', {senderId, receiverId, text});
};
