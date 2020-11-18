import * as actionTypes from '../../../utils/Constants';

const initialState = {
  isLoading: false,
  responseData: [],
  error: null,
};

export const createChatRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CHAT_ROOM_RESONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_CHAT_ROOM_SUCESS:
      return {
        ...state,
        isAddPatientLoading: false,
        responseData: action.payload,
      };
    case actionTypes.CREATE_CHAT_ROOM_FAILURE:
      return {
        ...state,
        isAddPatientError: action.payload,
      };
    default:
      return state;
  }
};
