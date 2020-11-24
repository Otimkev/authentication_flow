import * as actionType from '../../../utils/Constants';

const initialState = {
  isFetching: false,
  error: null,
  chatRooms: [],
};

export const loadChatRoomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CHAT_ROOM_RESONSE:
      return {
        ...state,
        isFetching: true,
      };
    case actionType.GET_CHAT_ROOM_SUCESS:
      return {
        ...state,
        chatRooms: action.payload,
        isFetching: false,
      };
    case actionType.GET_CHAT_ROOM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
