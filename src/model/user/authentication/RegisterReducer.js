import * as actionCreator from '../../../utils/Constants';

const inititialState = {
  isLoading: false,
  message: null,
  token: null,
  error: null,
};

export const signinReducer = (state = inititialState, action) => {
  switch (action.type) {
    case actionCreator.SIGNUP_RESONSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionCreator.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
        token: 'token implementation not done',
      };
    case actionCreator.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
