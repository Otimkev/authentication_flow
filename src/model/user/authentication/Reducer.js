import * as actionType from '../../../utils/Constants';

const initialState = {
  isLoading: false,
  Error: null,
  user: [],
  token: null,
};

export const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGNUP_RESONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.SIGNUP_SUCCESS:
      return {
        ...state,
        invite: action.payload.data,
        token: action.payload.token,
        isLoading: false,
      };
    case actionType.SIGNUP_FAILURE:
      return {
        ...state,
        Error: action.payload.error,
      };
    case actionType.SIGNIN_RESONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.SIGNIN_SUCCESS:
      return {
        ...state,
        invite: action.payload.data,
        token: action.payload.token,
        isLoading: false,
      };
    case actionType.SIGNIN_FAILURE:
      return {
        ...state,
        Error: action.payload.error,
      };
    default:
      return state;
  }
};
