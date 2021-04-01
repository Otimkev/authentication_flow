import axios from 'axios';
import {API_URL} from '../utils/config';

export const login = async ({email, password}) => {
  try {
    const res = await axios.post(`${API_URL}signin/`, {email, password});
    if (res.status === 200) {
      return {
        token: res.data.data.accessToken,
        success: res.data.success,
        id: res.data.data.id,
        username: res.data.data.firstName,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async ({
  email,
  password,
  hostpital,
  phoneNumber,
  firstName,
  lastName,
}) => {
  try {
    const res = await axios.post(`${API_URL}signup/`, {
      email,
      password,
      hostpital,
      phoneNumber,
      firstName,
      lastName,
    });
    if (res.status === 200) {
      return {
        token: res.data.data.accessToken,
        success: res.data.success,
        id: res.data.data.id,
        username: res.data.data.firstName,
      };
    }
  } catch (error) {
    console.log(error);
  }
};


export default {};
