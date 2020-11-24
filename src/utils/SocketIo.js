import io from 'socket.io-client';
const socket = io('http://192.168.3.101:3001/', {
  transports: ['websocket'],
  jsonp: false,
  rejectUnauthorized: '-',
  perMessageDeflate: '-',
});
socket.connect();
export default socket;
