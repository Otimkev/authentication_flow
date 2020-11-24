import * as actionType from '../../../utils/Constants';

export const getChatRoomsResponse = () => {
  return {
    type: actionType.GET_CHAT_ROOM_RESONSE,
  };
};

export const getChatRoomsSuccess = (rooms) => {
  return {
    type: actionType.GET_CHAT_ROOM_SUCESS,
    payload: rooms,
  };
};

export const getChatRoomsFailure = (error) => {
  return {
    type: actionType.GET_CHAT_ROOM_FAILURE,
    payload: error,
  };
};
