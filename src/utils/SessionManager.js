import AsyncStorage from '@react-native-community/async-storage';

export function* storeToken(userData) {
  yield AsyncStorage.setItem('user', userData);
}

export function* getToken() {
  const token = yield AsyncStorage.getItem('user');
  yield token.token;
}
