import AsyncStorage from '@react-native-community/async-storage';
import * as types from './Types';

export const registerResponse = (payload) => {
  return {
    type: types.RESPONSE,
    payload: payload,
  };
};

export const register = async (payload) => {
  return {
    type: types.SIGN_UP,
    payload: payload,
  };
};

export const failure = (payload) => {
  return {
    type: types.ERORR,
    payload: payload,
  };
};
