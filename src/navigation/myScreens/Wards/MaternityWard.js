import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MaternityWard = () => {
  MaternityWard.navigationOptions = {
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
      <Text>Call Ineza Rachel our Virtual Assistant</Text>
    </View>
  );
};

export default MaternityWard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
