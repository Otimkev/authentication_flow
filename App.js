import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenNavigation from './src/navigation/ScreenNavigator';

const App = () => {
  return <ScreenNavigation />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
