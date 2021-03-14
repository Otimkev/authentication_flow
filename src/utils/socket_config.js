import io from 'socket.io-client';
import {SOCKET_URL} from './config';

const socket = io(SOCKET_URL);
socket.connect();

export default socket;
