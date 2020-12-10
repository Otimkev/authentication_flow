import io from 'socket.io-client';
import {BASE_URL} from './config/Urls';
const socket = io(`${BASE_URL}`, {
  transports: ['websocket'],
  jsonp: false,
  rejectUnauthorized: '-',
  perMessageDeflate: '-',
});
socket.connect();
export default socket;
