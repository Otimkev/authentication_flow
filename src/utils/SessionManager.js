import AsyncStorage from '@react-native-community/async-storage';

export function* storeToken(userData) {
  yield AsyncStorage.setItem('user', userData);
}

export function* getToken() {
  const token = yield AsyncStorage.getItem('user');
  yield token.token;
}

export const destroyToken = async () => {
  try {
    return await AsyncStorage.removeItem('user');
  } catch (error) {
    console.log(error);
  }
};
