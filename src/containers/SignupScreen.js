import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text>Sign up Screen</Text>
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

export default SignUpScreen;
