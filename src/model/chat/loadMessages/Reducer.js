import * as types from '../../../utils/Constants';
import {GiftedChat} from 'react-native-gifted-chat';
const initialState = {
  historymessages: [],
  isLoading: false,
  error: null,
};

// export const messagesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.GOT_MESSAGES_SUCCESS:
//       return {...state, historymessages: action.payload};
//     default:
//       return state;
//   }
// };

// export const messagesReducerResponse = (state = {isLoading: false}, action) => {
//   switch (action.type) {
//     case types.GOT_MESSAGES_RESPONSE:
//       return {...state, isLoading: false};
//     default:
//       return state;
//   }
// };

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GOT_MESSAGES_RESPONSE:
      return {...state, isLoading: true};
    case types.GOT_MESSAGES_SUCCESS:
      return {...state, historymessages: action.payload, isLoading: false};
    case types.GOT_NEW_MESSAGE:
      return {...state, historymessages: action.messages};
    case types.GOT_MESSAGE_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};
