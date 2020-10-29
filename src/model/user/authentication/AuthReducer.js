import * as actionType from '../../../utils/Constants';

const initialState = {
  currentUser: null,
  error: null,
  isLoading: false,
  token: null,
};

export const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        token: action.payload,
      };
    case actionType.CHECK_TOKEN_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      };
    case actionType.SIGNUP_FAILURE:
    case actionType.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actionType.LOG_OUT_SUCCESS:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
