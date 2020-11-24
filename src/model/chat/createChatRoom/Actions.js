import * as actionType from '../../../utils/Constants';

export const createChatRoomResponse = (payload) => {
  return {
    type: actionType.CREATE_CHAT_ROOM_RESONSE,
    payload,
  };
};

export const createChatRoomSuccess = (data) => {
  return {
    type: actionType.CREATE_CHAT_ROOM_SUCESS,
    payload: data,
  };
};

export const createChatRoomFailure = (error) => {
  return {
    type: actionType.CREATE_CHAT_ROOM_FAILURE,
    payload: error,
  };
};
