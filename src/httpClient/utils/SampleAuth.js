import AsyncStorage from '@react-native-community/async-storage';

class auth {
  async onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new auth();
