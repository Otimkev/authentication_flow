import io from 'socket.io-client';
import {API_URL} from './config/Urls';
const socket = io(`${API_URL}`, {
  transports: ['websocket'],
  jsonp: false,
  rejectUnauthorized: '-',
  perMessageDeflate: '-',
});
socket.connect();
export default socket;
