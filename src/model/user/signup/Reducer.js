import * as types from './Types';

const initialState = {
  token: null,
  user: null,
  error: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESPONSE:
      return {
        ...state,
      };
    case types.SIGN_UP:
      return {
        ...state,
        token: action.payload,
      };
    case types.ERORR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
