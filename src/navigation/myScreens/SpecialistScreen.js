import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SpecialistScreen = () => {
  SpecialistScreen.navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#007360',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <View style={styles.container}>
      <Text>Specialist screen</Text>
    </View>
  );
};

export default SpecialistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
