import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DrawerNavigator from '../components/side';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <DrawerNavigator />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
