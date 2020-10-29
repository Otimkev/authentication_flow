import * as actionType from '../../../utils/Constants';

const initialState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

export const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };
    case actionType.SIGNUP_FAILURE:
    case actionType.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case actionType.LOG_OUT:
      return state;
    default:
      return state;
  }
};
