import axios from 'axios';

export const login = ({email, password}) =>
  // fake async http call returning user
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: email,
        email,
        password,
      });
    }, 300);
  });

export const signUp = ({email, password}) =>
  // fake async http call returning user
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: email,
        email,
        password,
      });
    }, 300);
  });

export const index_specialists = async () => {
  const response = await axios.get('');
  console.log(response.data);
};

export default {};
